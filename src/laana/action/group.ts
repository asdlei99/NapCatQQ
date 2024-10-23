import { GroupMemberRole, NapCatCore, Sex } from '@/core';
import { NapCatLaanaAdapter } from '@/laana';
import {
    LaanaUserEntity,
    LaanaUserEntity_Sex,
    LaanaUserEntity_GroupRoleData_PermissionLevel as PermLevel,
    LaanaFile,
    SetGroupAdminPing_Operation,
} from '@laana-proto/def';
import { LaanaActionHandler } from '@/laana/action/index';

export class LaanaGroupActionImpl {
    constructor(
        public core: NapCatCore,
        public laana: NapCatLaanaAdapter,
    ) {}

    handler: LaanaActionHandler = {
        getGroupMemberUins: async ({ groupCode }) => ({
            memberUins: await this.getGroupMemberUins(groupCode),
        }),

        getGroupMemberInfo: async ({ groupCode, memberUin }) => ({
            member: await this.getGroupMemberInfo(groupCode, memberUin),
        }),

        setGroupName: async ({ groupCode, name }) => {
            await this.setGroupName(groupCode, name);
            return { success: true };
        },

        setGroupAvatar: async ({ groupCode, avatar }) => ({
            avatarCacheId: await this.setGroupAvatar(groupCode, avatar!),
        }),

        setGroupAdmin: async ({ groupCode, memberUin, operation }) => {
            await this.setGroupAdmin(groupCode, memberUin, operation);
            return { success: true };
        },

        setGroupMemberCard: async ({ groupCode, memberUin, card }) => {
            await this.setGroupMemberCardName(groupCode, memberUin, card);
            return { success: true };
        },

        setGroupMemberShutUp: async ({ groupCode, memberUin, operation }) => {
            if (operation.oneofKind === 'lift') {
                if (operation.lift) {
                    await this.liftGroupMemberShutUp(groupCode, memberUin);
                }
            } else if (operation.oneofKind === 'duration') {
                await this.setGroupMemberShutUp(groupCode, memberUin, operation.duration);
            }
            return { success: true };
        },

        setGroupShutUpAll: async ({ groupCode, lift }) => {
            await this.setGroupShutUpAll(groupCode, lift);
            return { success: true };
        },

        setGroupMemberSpecialTitle: async ({ groupCode, memberUin, title }) => {
            await this.setGroupSpecialTitle(groupCode, memberUin, title);
            return { success: true };
        },

        kickGroupMember: async ({ groupCode, memberUin }) => {
            await this.kickGroupMember(groupCode, memberUin);
            return { success: true };
        },

        quitGroup: async ({ groupCode }) => {
            await this.quitGroup(groupCode);
            return { success: true };
        },
    };

    /**
     * Get all the member uins in a group.
     * @param groupCode
     */
    async getGroupMemberUins(groupCode: string) {
        return Array.from((await this.core.apis.GroupApi.getGroupMembersV2(groupCode)).values())
            .map(value => value.uin);
    }

    /**
     * Get group info.
     * @param groupCode Group code.
     * @param uin Uin of the member.
     */
    async getGroupMemberInfo(groupCode: string, uin: string): Promise<LaanaUserEntity> {
        const uid = await this.core.apis.UserApi.getUidByUinV2(uin);
        if (!uid) {
            throw new Error(`获取 ${uin} 信息失败`);
        }
        const userInfo = await this.core.apis.GroupApi.getGroupMember(groupCode, uid);
        if (!userInfo) {
            throw new Error(`获取 ${uin} 信息失败`);
        }
        return {
            uin,
            nick: userInfo.nick,
            sex: userInfo.sex === Sex.male ? LaanaUserEntity_Sex.MALE
                : userInfo.sex === Sex.female ? LaanaUserEntity_Sex.FEMALE
                    : LaanaUserEntity_Sex.UNKNOWN,
            age: userInfo.age,
            qid: userInfo.qid,
            roleData: {
                oneofKind: 'groupRoleData',
                groupRoleData: {
                    groupNick: userInfo.cardName || undefined,
                    permissionLevel: userInfo.role === GroupMemberRole.normal ? PermLevel.NORMAL :
                        userInfo.role === GroupMemberRole.admin ? PermLevel.ADMIN :
                            userInfo.role === GroupMemberRole.owner ? PermLevel.OWNER :
                                PermLevel.FALLBACK,
                    isRobot: userInfo.isRobot,
                    lastSpeakTime: BigInt(userInfo.lastSpeakTime), // TODO: multiple by 1000?
                    shutUpTime: BigInt(userInfo.shutUpTime), // TODO: multiple by 1000?
                }
            }
        };
    }

    /**
     * Get group info.
     * @param groupCode Group code.
     * @param newGroupName New group name.
     */
    async setGroupName(groupCode: string, newGroupName: string) {
        return await this.core.apis.GroupApi.setGroupName(groupCode, newGroupName);
    }

    /**
     * Set group avatar.
     * @param groupCode Group code.
     * @param newAvatarFile Laana-styled file.
     * @returns Cache ID of the new avatar.
     */
    async setGroupAvatar(groupCode: string, newAvatarFile: LaanaFile) {
        const cacheId = await this.laana.utils.file.resolveCacheIdFromLaanaFile(newAvatarFile);
        const path = await this.laana.utils.file.toLocalPath(cacheId);
        await this.core.apis.GroupApi.setGroupAvatar(groupCode, path);
        return cacheId;
    }

    /**
     * Set group admin.
     * @param groupCode Group code.
     * @param uin Uin of the member.
     * @param operation Set or unset.
     */
    async setGroupAdmin(groupCode: string, uin: string, operation: SetGroupAdminPing_Operation) {
        const uid = await this.core.apis.UserApi.getUidByUinV2(uin);
        if (!uid) {
            throw new Error(`获取 ${uin} 对应 ${uid} 失败`);
        }
        return await this.core.apis.GroupApi.setMemberRole(
            groupCode,
            uid,
            operation === SetGroupAdminPing_Operation.SET ? GroupMemberRole.admin : GroupMemberRole.normal
        );
    }

    /**
     * Set group member card name.
     * @param groupCode Group code.
     * @param uin Uin of the member.
     * @param newCardName New card name.
     */
    async setGroupMemberCardName(groupCode: string, uin: string, newCardName: string) {
        const uid = await this.core.apis.UserApi.getUidByUinV2(uin);
        if (!uid) {
            throw new Error(`获取 ${uin} 对应 ${uid} 失败`);
        }
        return await this.core.apis.GroupApi.setMemberCard(groupCode, uid, newCardName);
    }

    /**
     * Shut up a group member.
     * @param groupCode Group code.
     * @param uin Uin of the member.
     * @param duration Duration of the shut-up.
     */
    async setGroupMemberShutUp(groupCode: string, uin: string, duration: number) {
        const uid = await this.core.apis.UserApi.getUidByUinV2(uin);
        if (!uid) {
            throw new Error(`获取 ${uin} 对应 ${uid} 失败`);
        }
        return await this.core.apis.GroupApi.banMember(groupCode, [{ uid, timeStamp: duration }]);
    }

    /**
     * Lift a group member's shut-up.
     * @param groupCode Group code.
     * @param uin Uin of the member.
     */
    async liftGroupMemberShutUp(groupCode: string, uin: string) {
        const uid = await this.core.apis.UserApi.getUidByUinV2(uin);
        if (!uid) {
            throw new Error(`获取 ${uin} 对应 ${uid} 失败`);
        }
        return await this.core.apis.GroupApi.banMember(groupCode, [{ uid, timeStamp: 0 }]);
    }

    /**
     * Set group shut-up all.
     * @param groupCode Group code.
     * @param lift Lift or set.
     */
    async setGroupShutUpAll(groupCode: string, lift: boolean) {
        return await this.core.apis.GroupApi.banGroup(groupCode, !lift);
    }

    /**
     * Set group special title.
     * @param groupCode Group code.
     * @param uin Uin of the member.
     * @param specialTitle The special title. If empty, will be unset.
     */
    async setGroupSpecialTitle(groupCode: string, uin: string, specialTitle: string) {
        const uid = await this.core.apis.UserApi.getUidByUinV2(uin);
        if (!uid) {
            throw new Error(`获取 ${uin} 对应 ${uid} 失败`);
        }
        return await this.core.apis.PacketApi.sendSetSpecialTittlePacket(groupCode, uid, specialTitle);
    }

    /**
     * Kick a group member.
     * @param groupCode Group code.
     * @param uin Uin of the member.
     */
    async kickGroupMember(groupCode: string, uin: string) {
        const uid = await this.core.apis.UserApi.getUidByUinV2(uin);
        if (!uid) {
            throw new Error(`获取 ${uin} 对应 ${uid} 失败`);
        }
        return await this.core.apis.GroupApi.kickMember(groupCode, [uid]);
    }

    /**
     * Quit a group.
     * @param groupCode Group code.
     */
    async quitGroup(groupCode: string) {
        return await this.core.apis.GroupApi.quitGroup(groupCode);
    }
}
