import * as LZ_String from 'lz-string'
import { refStore } from '@/composables/use-public.js'
import { BrowserMultiFormatReader } from '@zxing/library'

/**
 * 获取url中参数
 * ex url?name=zs&age=23 传入name获取age 获取对应参数
 * @param name
 * @returns {string}
 */
export function getUrlParam(name) {
  let qs = arguments[1] || window.location.href,
    reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
    r = qs.substr(qs.indexOf("?") + 1).match(reg);
  if (r !== null) {
    let i = decodeURI(r[2]).indexOf('#');
    if (i !== -1) {
      return decodeURI(r[2]).substring(0, i);
    } else {
      return decodeURI(r[2]);
    };
  } else {
    return '';
  }
}

export {LZ_String}


//释放视频流
export function stopMediaStream(stream) {
  if (stream && stream.getTracks) {
    // 停止所有轨道
    stream.getTracks().forEach((track) => {
      track.stop()
    })
  }
}

/**
 * 立即执行第一次 setInterval
 * @param func 函数
 * @param interval 毫秒
 * @return {number} 定时器id
 */
export function immediateInterval(func, interval) {
  // 立即执行函数
  func();

  // 设置定时器以重复执行
  return setInterval(func, interval);
}

//振动
export function vibration(duration = 100) {
  if (navigator.vibrate) {
    navigator.vibrate(duration)
  } else {
    console.log('不支持振动')
  }
}

/**
 * 初始化设备 返回当前选择的摄像头
 * @return {Promise<undefined extends ShallowRef<infer V> ? V : (undefined extends Ref<infer V> ? UnwrapRefSimple<V> : UnwrapRefSimple<undefined>)>}
 */
export async function initializationDevice() {
  const { allCameraDevices, currentCameraDeviceId } = refStore.value
  if (allCameraDevices.length > 0 && currentCameraDeviceId) {
    return refStore.value.currentCameraDeviceId
  }
  const videoDevices = await new BrowserMultiFormatReader().listVideoInputDevices()
  console.log('videoDevices', videoDevices)
  const availableDeviceId = getAvailableDeviceId(videoDevices)
  refStore.value.allCameraDevices = videoDevices.map((m) => ({
    label: m.label,
    value: m.deviceId
  }))
  refStore.value.currentCameraDeviceId = availableDeviceId
  return refStore.value.currentCameraDeviceId
}

//从摄像头设备列表中选择最可能的后置主摄
function getAvailableDeviceId(videoDevices) {
  let availableDeviceId = videoDevices[videoDevices.length - 1].deviceId
  // 一般获取了手机的摄像头列表里不止一个，有的手机摄像头高级多层，会有变焦摄像头等情况，需要做处理
  if (videoDevices.length > 1) {
    // 一般通过判断摄像头列表项里的 label 字段，'camera2 0, facing back' 字符串含有 'back' 和 '0'，大部分机型是这样，如果有些机型没有，那就还是默认获取最后一个
    availableDeviceId = videoDevices.find((el) => {
      return el.label.indexOf('back') > -1 && el.label.indexOf('0') > -1
    })
      ? videoDevices.find((el) => {
        return el.label.indexOf('back') > -1 && el.label.indexOf('0') > -1
      }).deviceId
      : videoDevices[videoDevices.length - 1].deviceId
  }
  return availableDeviceId
}


/**
 * 日期格式化
 * @param date{Date}
 * @param fmt{String}
 * @returns {string}
 */
export function patternTime(date, fmt = 'yyyy-MM-dd') {
  const o = {
    "M+" : date.getMonth()+1, //月份
    "d+" : date.getDate(), //日
    "h+" : date.getHours()%12 === 0 ? 12 : date.getHours()%12, //小时
    "H+" : date.getHours(), //小时
    "m+" : date.getMinutes(), //分
    "s+" : date.getSeconds(), //秒
    "q+" : Math.floor((date.getMonth()+3)/3), //季度
    "S" : date.getMilliseconds() //毫秒
  };
  const week = {
    "0" : "/u65e5",
    "1" : "/u4e00",
    "2" : "/u4e8c",
    "3" : "/u4e09",
    "4" : "/u56db",
    "5" : "/u4e94",
    "6" : "/u516d"
  };
  if(/(y+)/.test(fmt)){
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
  }
  if(/(E+)/.test(fmt)){
    fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[date.getDay()+""]);
  }
  for(let k in o){
    if(new RegExp("("+ k +")").test(fmt)){
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length===1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    }
  }
  return fmt;
}

/**
 * 日志对象
 * @type {{warn(*): void, error(*): void, info(*): void}}
 */
export const log = {
  info(msg) {
    console.log(`${patternTime(new Date(), 'HH:mm:ss:S')} ${msg}`)
  },
  warn(msg) {
    console.warn(`${patternTime(new Date(), 'HH:mm:ss:S')} ${msg}`)
  },
  error(msg) {
    console.error(`${patternTime(new Date(), 'HH:mm:ss:S')} ${msg}`)
  },
}

/**
 *
 * @param [option]
 * @param {Array} [option.accept] ex ['.csv', '.xlsx']
 * @return {*}
 */
export function chooseFile(option = {}) {
  const {
    accept = ['.csv', '.xlsx']
  } = option
  return new Promise(resolve => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = accept.join(',');

    input.addEventListener('change', function (event) {
      // 获取选择的文件列表
      const fileList = event.target.files;

      // 检查是否选择了文件
      if (fileList.length > 0) {
        resolve( fileList[0])

      } else {
        console.log('没有选择文件');
      }
    });
    input.click();
  })
}