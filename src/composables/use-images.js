import jsQR from 'jsqr'


export function useAnalyzeQrcode() {

  /**
   * 识别图片连接中的二维码数据
   * @param imgUrl
   */
  async function analyzeQrcodeByImgUrl(imgUrl) {
    return await new Promise(resolve => {
      let canvas = document.createElement('canvas');
      let context = canvas.getContext('2d');
      let image = new Image();
      image.crossOrigin = '';

      image.onload = function() {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, image.width, image.height);
        let imageData = context.getImageData(0, 0, image.width, image.height);
        let code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
          console.log('code', code);
          console.log('code.data', code.data)
          resolve(code.data)
        } else {
          console.error("No QR code found.");
        }
      };
      image.src = imgUrl.toString();
    })
  }

  return {
    analyzeQrcodeByImgUrl
  }
}