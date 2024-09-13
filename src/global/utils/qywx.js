import * as ww from '@wecom/jssdk'

/**
 * 企业微信wecome-jssdk接口注册
 * @param authRequest
 * @param jsApiList
 * @returns {Promise<unknown>}
 */
export async function weComJsSdkRegister(authRequest, jsApiList) {
    const {
        corpId, //当前用户企业所属企业ID
        agentId, //当前应用的AgentID
        timestamp, //生成签名的时间戳
        nonceStr, //生成签名的随机串
        signature, //企业身份权限鉴权签名
        agentSignature //企业应用身份权限鉴权签名
    } = await authRequest();
    //`${location.href.split('#')[0]}`
    return new Promise((resolve) => {
        ww.register({
            corpId: corpId, // 必填，当前用户企业所属企业ID
            agentId: agentId,
            jsApiList: jsApiList || ['scanQRCode', 'shareToExternalChat', "getCurExternalContact",
                "shareToExternalContact",
                "sendChatMessage", "getCurExternalChat", "getContext"
            ], // 必填，需要使用的JSAPI列表
            getConfigSignature: () => {
                return {
                    timestamp: timestamp,
                    nonceStr: nonceStr,
                    signature: signature
                }
            }, // 必填，根据url生成企业签名的回调函数
            getAgentConfigSignature: () => {
                return {
                    timestamp: timestamp,
                    nonceStr: nonceStr,
                    signature: agentSignature
                }
            },
            onAgentConfigComplete: () => {
                resolve()
            }

        })

    })
}