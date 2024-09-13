import usePublic from './use-public.js'
import { getUrlParam } from '@/global/utils/index.js'
import WebViewConstants from '@/global/constants/WebViewConstants.js'

const { Constants } = usePublic()
const { uni } = window


export function useUniWebView() {

  function getUniEnv() {
    return new Promise(async (resolve) => {
      await uni.getEnv(function (res) {
        return Object.keys(res)[0]
      })
    })
  }
}

/**
 * web-view网页向uniapp发送消息, 触发消息后应当回退上一级页面，
 * @returns {{uniPostMsg: ((function(*): Promise<void>)|*)}}
 */
export function userUniMessage() {
  async function uniPostMsg(msg) {
    let platform = undefined
    await uni.getEnv(function (res) {
      platform = Object.keys(res)[0]
    })
    setTimeout(() => {
      switch (platform) {
        case Constants.H5:
          uni.postMessage({ data: { action: msg } })
          break
        case Constants.WX_XCX:
          //小程序会在页面后退时收到消息，多次发送消息存入在数组中
          uni.postMessage({ data: { action: msg } })
          uni.navigateBack()
          break
        case Constants.APP_PLUS:
          uni.postMessage({ data: { action: msg } })
          break
      }
    }, 200)
  }

  return {
    uniPostMsg
  }
}

/**
 * 移动端WebViewInit
 * @returns {any}
 */
export function useWebViewInit() {
  const { Cache, Constants, Modal } = usePublic()
  const params = getUrlParam('params') || encodeURIComponent(JSON.stringify({}))
  const {
    token,
    baseURL = 'https://auto.hsdzipper.cn/prod-api/hsd-crm',
    data
  } = JSON.parse(decodeURIComponent(params))
  Cache.session.setJSON(Constants.ADMIN_TOKEN, token)
  window['AXIOS-BASE-API'] = baseURL
  return data
}

/**
 *
 *  @param {string} callbackFuncName uni-app app端 eval的全局回调函数名称
 *  @param {Function} callback 扫码结果的处理回调
 */
export function useCallAppScan(callbackFuncName, callback) {
  const { uniPostMsg } = userUniMessage()

  function appScanCallBack(input) {
    console.log('inputinputinput', input)
    callback(input)
  }
  window[`${callbackFuncName}`] = appScanCallBack

  function callAppScan() {
    uniPostMsg({
      type: WebViewConstants.SCAN_CODE,
      callBackFunc: `${callbackFuncName}`
    })
  }

  return {
    callAppScan
  }
}
