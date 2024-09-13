import request from '@/global/utils/request.js';

export function wxJsSdkConfigApi() {
  return request({
    method: 'get',
    url: '/'
  })
}