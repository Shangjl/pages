import axios from 'axios'
import usePublic  from '../../composables/use-public.js'

const { Cache, Constants } = usePublic()
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

// 创建axios实例
const service = axios.create({
  baseURL: window['AXIOS-BASE-API'],
  timeout: 10000
})

service.interceptors.request.use(config => {
  config.baseURL = window['AXIOS-BASE-API'] || config.baseURL;
  config.headers['Authorization'] = 'Bearer ' + Cache.session.getJSON(Constants.ADMIN_TOKEN)
  return config;
},err => {
  return Promise.reject(err);
})

service.interceptors.response.use(res => {
    return res.data
  },
  error => {
    console.error('err' + error)
    return Promise.reject(error)
  }
)

export default service
