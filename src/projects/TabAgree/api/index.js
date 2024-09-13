import request from '@/global/utils/request.js';

export function test() {
  return request({
    method: 'get',
    url: '/'
  })
}

/**
 *  获取同意拉片协议内容
 * @returns {*}
 */
export function getTabAgreement() {
  return request({
    method: 'get',
    url: '/pulltab/show/confidentialityAgreement'
  })
}