import { NapCatCore } from '@/core';
import { NapCatLaanaAdapter } from '@/laana';

export class LaanaUserUtils {
    constructor(
        public core: NapCatCore,
        public laana: NapCatLaanaAdapter,
    ) {
    }

    async findUinByUidOrThrow(uid: string): Promise<string> {
        const uin = await this.core.apis.UserApi.getUinByUidV2(uid);
        if (!uin) {
            throw new Error(`获取 ${uid} 对应 ${uin} 失败`);
        }
        return uin;
    }

    async findUidByUinOrThrow(uin: string): Promise<string> {
        const uid = await this.core.apis.UserApi.getUidByUinV2(uin);
        if (!uid) {
            throw new Error(`获取 ${uin} 对应 ${uid} 失败`);
        }
        return uid;
    }
}
