const _0x4efe10=_0x2465;(function(_0x223ecc,_0x5e33d9){const _0xc45378=_0x2465,_0x3026c2=_0x223ecc();while(!![]){try{const _0x3a37cc=-parseInt(_0xc45378(0x9b))/0x1+parseInt(_0xc45378(0xe3))/0x2*(parseInt(_0xc45378(0xca))/0x3)+parseInt(_0xc45378(0xd8))/0x4+-parseInt(_0xc45378(0xa6))/0x5*(-parseInt(_0xc45378(0xe4))/0x6)+parseInt(_0xc45378(0x99))/0x7+parseInt(_0xc45378(0xae))/0x8*(-parseInt(_0xc45378(0xea))/0x9)+-parseInt(_0xc45378(0xbf))/0xa;if(_0x3a37cc===_0x5e33d9)break;else _0x3026c2['push'](_0x3026c2['shift']());}catch(_0x2bfbce){_0x3026c2['push'](_0x3026c2['shift']());}}}(_0xa6c8,0x980e7));var __decorate=this&&this[_0x4efe10(0xe0)]||function(_0x434a91,_0x1edc94,_0x2966e5,_0x296dd8){const _0x3d1812=_0x4efe10,_0x8f7989={'iFTTC':function(_0x2f86f6,_0x1dbbbb){return _0x2f86f6<_0x1dbbbb;},'qSfye':function(_0x14ed73,_0xaa6168){return _0x14ed73===_0xaa6168;},'fhECL':function(_0x248ea2,_0x38182c){return _0x248ea2===_0x38182c;},'oGDqp':'object','VkeRm':'function','YgYSI':function(_0x32ac7d,_0x1bcda8){return _0x32ac7d-_0x1bcda8;},'yjmDC':function(_0x31aea9,_0x57a10d){return _0x31aea9(_0x57a10d);},'dYmjK':function(_0x8d6cf4,_0x5a9179){return _0x8d6cf4>_0x5a9179;},'RbLRV':function(_0x3a0eec,_0x36c01e,_0x27599f,_0xd1a572){return _0x3a0eec(_0x36c01e,_0x27599f,_0xd1a572);},'cgLyB':function(_0x4b0dec,_0x542cd1,_0x3bcba5){return _0x4b0dec(_0x542cd1,_0x3bcba5);},'QEmsM':function(_0x3bd04e,_0x720c61){return _0x3bd04e>_0x720c61;}};var _0x26613b=arguments['length'],_0x3e3c86=_0x8f7989[_0x3d1812(0xbd)](_0x26613b,0x3)?_0x1edc94:_0x8f7989[_0x3d1812(0xa4)](_0x296dd8,null)?_0x296dd8=Object[_0x3d1812(0xb1)](_0x1edc94,_0x2966e5):_0x296dd8,_0x15a1f6;if(_0x8f7989['fhECL'](typeof Reflect,_0x8f7989['oGDqp'])&&typeof Reflect[_0x3d1812(0xdf)]===_0x8f7989[_0x3d1812(0xa9)])_0x3e3c86=Reflect[_0x3d1812(0xdf)](_0x434a91,_0x1edc94,_0x2966e5,_0x296dd8);else{for(var _0x5857d8=_0x8f7989['YgYSI'](_0x434a91['length'],0x1);_0x5857d8>=0x0;_0x5857d8--)if(_0x15a1f6=_0x434a91[_0x5857d8])_0x3e3c86=(_0x8f7989[_0x3d1812(0xbd)](_0x26613b,0x3)?_0x8f7989[_0x3d1812(0xcf)](_0x15a1f6,_0x3e3c86):_0x8f7989[_0x3d1812(0x91)](_0x26613b,0x3)?_0x8f7989[_0x3d1812(0xde)](_0x15a1f6,_0x1edc94,_0x2966e5,_0x3e3c86):_0x8f7989['cgLyB'](_0x15a1f6,_0x1edc94,_0x2966e5))||_0x3e3c86;}return _0x8f7989[_0x3d1812(0xc6)](_0x26613b,0x3)&&_0x3e3c86&&Object[_0x3d1812(0xa8)](_0x1edc94,_0x2966e5,_0x3e3c86),_0x3e3c86;};function _0x2465(_0x4073cd,_0x2ef539){const _0xa6c87a=_0xa6c8();return _0x2465=function(_0x246529,_0x33400b){_0x246529=_0x246529-0x90;let _0x1045cd=_0xa6c87a[_0x246529];return _0x1045cd;},_0x2465(_0x4073cd,_0x2ef539);}import{selfInfo}from'@/core/data';import{CacheClassFuncAsync}from'@/common/utils/helper';import{napCatCore}from'@/core';import{ProfileListener}from'@/core/listeners';import{randomUUID}from'crypto';import{RequestUtil}from'@/common/utils/request';import{logDebug}from'@/common/utils/log';import{NTEventDispatch}from'@/common/utils/EventTask';const userInfoCache={},profileListener=new ProfileListener(),userDetailHandlers=new Map();profileListener[_0x4efe10(0xb3)]=_0x4cd618=>{const _0x4b2120=_0x4efe10;userInfoCache[_0x4cd618['uid']]=_0x4cd618,userDetailHandlers[_0x4b2120(0xd3)](_0x68dae3=>_0x68dae3(_0x4cd618));},setTimeout(()=>{const _0x49d0ae=_0x4efe10;napCatCore[_0x49d0ae(0xc2)](()=>{const _0xf1b480=_0x49d0ae;napCatCore[_0xf1b480(0x9a)](profileListener);});},0x64);export class NTQQUserApi{static async['setLongNick'](_0x5a3626){const _0x15584d=_0x4efe10;return napCatCore[_0x15584d(0xe6)]['getProfileService']()[_0x15584d(0xf0)](_0x5a3626);}static async[_0x4efe10(0xd2)](_0x136b42,_0x52f4ac,_0x2eef88){const _0x406300=_0x4efe10;return napCatCore[_0x406300(0xe6)]['getMsgService']()['setStatus']({'status':_0x136b42,'extStatus':_0x52f4ac,'batteryStatus':_0x2eef88});}static async['getBuddyRecommendContactArkJson'](_0xf74829,_0x16aed3=''){const _0x38468e=_0x4efe10;return napCatCore[_0x38468e(0xe6)][_0x38468e(0xcc)]()[_0x38468e(0xe5)](_0xf74829,_0x16aed3);}static async[_0x4efe10(0xd9)](_0x209581,_0x19f0b2=0x1){return napCatCore['session']['getProfileLikeService']()['setBuddyProfileLike']({'friendUid':_0x209581,'sourceId':0x47,'doLikeCount':_0x19f0b2,'doLikeTollCount':0x0});}static async['setQQAvatar'](_0x376c20){const _0x25b3af=_0x4efe10,_0x137176=await napCatCore[_0x25b3af(0xe6)][_0x25b3af(0xa2)]()[_0x25b3af(0xc1)](_0x376c20);return{'result':_0x137176?.[_0x25b3af(0xc8)],'errMsg':_0x137176?.['errMsg']};}static async[_0x4efe10(0xb9)](){}static async[_0x4efe10(0x94)](_0x4ece66){}static async[_0x4efe10(0xdb)](_0x203278){const _0x260e85=_0x4efe10,_0x4e63df={'GIftX':function(_0x40a19e,_0x445966){return _0x40a19e(_0x445966);},'OdXld':_0x260e85(0xeb),'jHvcO':function(_0x5f5377,_0x15abbb){return _0x5f5377===_0x15abbb;},'rAZOA':function(_0x31193a,_0x2f68c0){return _0x31193a(_0x2f68c0);},'fOkhZ':function(_0x56c12b){return _0x56c12b();},'bZvkX':function(_0x1edf2c,_0x51c66c,_0x1a82f7){return _0x1edf2c(_0x51c66c,_0x1a82f7);}},_0x5c263e=napCatCore['session'][_0x260e85(0xa2)]();return new Promise((_0x23b20e,_0x11837a)=>{const _0x5e013b=_0x260e85,_0x43f2bf=_0x4e63df[_0x5e013b(0xb2)](randomUUID);let _0xa0e137=![],_0x5346e9=undefined,_0x323b1a=!![];_0x4e63df[_0x5e013b(0xb6)](setTimeout,()=>{const _0x487bf6=_0x5e013b;!_0xa0e137&&(_0x5346e9?_0x4e63df[_0x487bf6(0x93)](_0x23b20e,_0x5346e9):_0x4e63df[_0x487bf6(0x93)](_0x11837a,_0x4e63df['OdXld'])),userDetailHandlers['delete'](_0x43f2bf);},0x1388),userDetailHandlers[_0x5e013b(0xec)](_0x43f2bf,_0x45b305=>{const _0x2d60c1=_0x5e013b;_0x4e63df[_0x2d60c1(0xcd)](_0x45b305[_0x2d60c1(0x9d)],_0x203278)&&(_0x323b1a?(_0x5346e9=_0x45b305,_0x323b1a=![]):(_0xa0e137=!![],_0x4e63df[_0x2d60c1(0x9f)](_0x23b20e,_0x45b305)));}),_0x5c263e[_0x5e013b(0xa1)](_0x203278,[0x0])[_0x5e013b(0xee)](_0x15833e=>{});});}static async[_0x4efe10(0xe2)](_0x3dfd0e){const _0x3ef57e=_0x4efe10;return napCatCore[_0x3ef57e(0xe6)]['getProfileService']()[_0x3ef57e(0xbb)](_0x3dfd0e);}static async[_0x4efe10(0xd0)](_0x3c10fa){const _0x1670ff=_0x4efe10,_0x94756f={'FFCbB':function(_0xe4442f,_0x3043fd){return _0xe4442f+_0x3043fd;},'eWWHr':function(_0x12524e,_0x106050){return _0x12524e+_0x106050;},'eqpWK':function(_0x5eb903,_0x435ae6){return _0x5eb903+_0x435ae6;},'hVMdX':function(_0x14899b,_0xbcb7a9){return _0x14899b+_0xbcb7a9;},'swyGp':_0x1670ff(0xa3),'XZtbF':_0x1670ff(0xc3),'ZSTyu':_0x1670ff(0xd4),'WcNtC':_0x1670ff(0xdd),'iiOLq':_0x1670ff(0xdc),'Stitu':function(_0x1ab676,_0x290c32,_0x1f184a){return _0x1ab676(_0x290c32,_0x1f184a);}},_0x15e60c=await NTQQUserApi[_0x1670ff(0xe9)](),_0x10f4b4=_0x94756f[_0x1670ff(0x92)](_0x94756f[_0x1670ff(0x92)](_0x94756f[_0x1670ff(0xa7)](_0x94756f['FFCbB'](_0x94756f[_0x1670ff(0x92)](_0x94756f[_0x1670ff(0xe8)](_0x94756f[_0x1670ff(0xb5)](_0x94756f[_0x1670ff(0xaf)],selfInfo[_0x1670ff(0xf1)]),_0x94756f[_0x1670ff(0xb8)]),_0x15e60c[_0x1670ff(0xcb)]),_0x94756f['ZSTyu']),_0x3c10fa),_0x94756f['WcNtC'])+selfInfo['uin'],_0x94756f[_0x1670ff(0xc9)]);let _0x51e734={};try{_0x51e734=await RequestUtil[_0x1670ff(0xbc)](_0x10f4b4);}catch(_0x149c6a){_0x94756f[_0x1670ff(0xd1)](logDebug,_0x1670ff(0xe1),_0x149c6a),_0x51e734={};}return _0x51e734;}static async[_0x4efe10(0xc5)](_0x4e0f9c){const _0x3df91b=_0x4efe10;return await napCatCore['session'][_0x3df91b(0xd5)]()['getPskey'](_0x4e0f9c,!![]);}static async[_0x4efe10(0xa0)](){const _0xbbd41c=_0x4efe10,_0x5529c4=await napCatCore[_0xbbd41c(0xe6)][_0xbbd41c(0xc0)]()[_0xbbd41c(0xa0)]({'justFetchMsgConfig':'1','type':0x1,'version':0x0,'aioKeywordVersion':0x0});return _0x5529c4?.['response']?.[_0xbbd41c(0x90)];}static async[_0x4efe10(0xe7)](){const _0x4e4ddb=_0x4efe10,_0xe18e2a={'zFKhF':function(_0x23b6a8,_0x47bee9){return _0x23b6a8+_0x47bee9;},'JptnB':function(_0x5ba122,_0x327447){return _0x5ba122+_0x327447;},'xOuiQ':_0x4e4ddb(0xa3),'OtDcA':_0x4e4ddb(0xdc),'vydAC':function(_0x1b8f64,_0x6d9767,_0x2c1239){return _0x1b8f64(_0x6d9767,_0x2c1239);},'kMaBP':_0x4e4ddb(0xe1)},_0x497fe1=await NTQQUserApi[_0x4e4ddb(0xe9)](),_0x25f213=_0xe18e2a[_0x4e4ddb(0xed)](_0xe18e2a['zFKhF'](_0xe18e2a[_0x4e4ddb(0xef)](_0xe18e2a[_0x4e4ddb(0xed)](_0xe18e2a['xOuiQ'],selfInfo[_0x4e4ddb(0xf1)])+_0x4e4ddb(0xc3)+_0x497fe1[_0x4e4ddb(0xcb)],'&u1=https%3A%2F%2Fuser.qzone.qq.com%2F'),selfInfo[_0x4e4ddb(0xf1)]),_0xe18e2a[_0x4e4ddb(0xd7)]);let _0x3f34d0={};try{_0x3f34d0=await RequestUtil['HttpsGetCookies'](_0x25f213);}catch(_0x48e8ad){_0xe18e2a[_0x4e4ddb(0xac)](logDebug,_0xe18e2a['kMaBP'],_0x48e8ad),_0x3f34d0={};}return _0x3f34d0;}static async[_0x4efe10(0x98)](){const _0x626190=_0x4efe10,_0x365e8a={'aAUuH':function(_0x5bf562,_0x517799){return _0x5bf562+_0x517799;},'YNzLL':_0x626190(0xc3),'VvHcj':'&u1=https%3A%2F%2Fh5.qzone.qq.com%2Fqqnt%2Fqzoneinpcqq%2Ffriend%3Frefresh%3D0%26clientuin%3D0%26darkMode%3D0&keyindex=19%27','aipxM':function(_0x50f08c,_0xfcc3d1,_0x3ef50c){return _0x50f08c(_0xfcc3d1,_0x3ef50c);},'PQXnl':'请求获取Skey时失败','SUbbR':_0x626190(0xbe)};try{const _0x32211c=await NTQQUserApi['forceFetchClientKey']();if(_0x32211c[_0x626190(0xc8)]!==0x0)return'';const _0x1f62b9=_0x32211c[_0x626190(0xcb)],_0x5166ae=_0x32211c[_0x626190(0xd6)],_0x381aab=_0x365e8a[_0x626190(0xce)](_0x365e8a[_0x626190(0xce)]('https://ssl.ptlogin2.qq.com/jump?ptlang=1033&clientuin=',selfInfo[_0x626190(0xf1)])+_0x365e8a['YNzLL'],_0x1f62b9)+_0x365e8a[_0x626190(0xba)];let _0x2f0c0e={};try{_0x2f0c0e=await RequestUtil['HttpsGetCookies'](_0x381aab);}catch(_0x17477f){_0x365e8a[_0x626190(0xaa)](logDebug,_0x365e8a[_0x626190(0xb0)],_0x17477f),_0x2f0c0e={};}const _0x54a94b=_0x2f0c0e[_0x365e8a['SUbbR']];if(!_0x54a94b)return'';return _0x54a94b;}catch(_0x191fe4){}return undefined;}static async[_0x4efe10(0x9e)](_0x48621d){const _0x425948=_0x4efe10,_0x4013f2={'FyhoX':'NodeIKernelUixConvertService/getUid'};let _0x42177e=await NTEventDispatch[_0x425948(0x95)](_0x4013f2[_0x425948(0xb7)],0x1388,[_0x48621d]);return _0x42177e[_0x425948(0x97)][_0x425948(0xc7)](_0x48621d);}static async[_0x4efe10(0xab)](_0x1c0bf5){const _0x2ac203=_0x4efe10;if(!_0x1c0bf5)return'';let _0x5a3c2b=await NTEventDispatch['CallNoListenerEvent'](_0x2ac203(0x9c),0x1388,[_0x1c0bf5]);return _0x5a3c2b[_0x2ac203(0xc4)]['get'](_0x1c0bf5);}static async[_0x4efe10(0xda)](_0x4247b5){const _0x359f0b=_0x4efe10,_0x360194={'fvNwR':_0x359f0b(0x96)};return NTEventDispatch[_0x359f0b(0x95)](_0x360194[_0x359f0b(0xa5)],0x1388,_0x4247b5);}static async[_0x4efe10(0xe9)](){const _0x466d24=_0x4efe10;return await napCatCore[_0x466d24(0xe6)][_0x466d24(0xad)]()[_0x466d24(0xe9)]('');}}function _0xa6c8(){const _0x4e3b6a=['skey','1887250raLucE','getRobotService','setHeader','onLoginSuccess','&clientkey=','uinInfo','getPSkey','QEmsM','get','result','iiOLq','13254NQgDmO','clientKey','getBuddyService','jHvcO','aAUuH','yjmDC','getCookies','Stitu','setSelfOnlineStatus','forEach','&u1=https%3A%2F%2F','getTipOffService','keyIndex','OtDcA','3903624eYSlXk','like','getUserDetailInfoByUin','getUserDetailInfo','%2Finfocenter&keyindex=19%27','%2F','RbLRV','decorate','__decorate','请求获取Cookies时失败','modifySelfProfile','170YWasSJ','6ymEcjg','getBuddyRecommendContactArkJson','session','getQzoneCookies','eqpWK','forceFetchClientKey','2313qGPGCK','getUserDetailInfo\x20timeout','set','zFKhF','then','JptnB','setLongNick','uin','robotUinRanges','dYmjK','FFCbB','GIftX','getUserInfo','CallNoListenerEvent','NodeIKernelProfileService/getUserDetailInfoByUin','uidInfo','getSkey','1331736FnZynm','addListener','481604oCqbVd','NodeIKernelUixConvertService/getUin','uid','getUidByUin','rAZOA','getRobotUinRange','getUserDetailInfoWithBizInfo','getProfileService','https://ssl.ptlogin2.qq.com/jump?ptlang=1033&clientuin=','qSfye','fvNwR','4268705mTsfRP','eWWHr','defineProperty','VkeRm','aipxM','getUinByUid','vydAC','getTicketService','34312CMPnKN','swyGp','PQXnl','getOwnPropertyDescriptor','fOkhZ','onProfileDetailInfoChanged','ClientKey','hVMdX','bZvkX','FyhoX','XZtbF','getSelfInfo','VvHcj','modifyDesktopMiniProfile','HttpsGetCookies','iFTTC'];_0xa6c8=function(){return _0x4e3b6a;};return _0xa6c8();}__decorate([CacheClassFuncAsync(0x708*0x3e8)],NTQQUserApi,'getCookies',null),__decorate([CacheClassFuncAsync(0x708*0x3e8)],NTQQUserApi,_0x4efe10(0xc5),null),__decorate([CacheClassFuncAsync(0x708*0x3e8)],NTQQUserApi,_0x4efe10(0xe7),null),__decorate([CacheClassFuncAsync(0x708*0x3e8)],NTQQUserApi,_0x4efe10(0x98),null),__decorate([CacheClassFuncAsync(0xe10*0x3e8,_0x4efe10(0xb4))],NTQQUserApi,'forceFetchClientKey',null);