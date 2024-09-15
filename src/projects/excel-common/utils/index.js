export function isLessThanThreeMinutes(date1, date2) {
    // 计算两个日期之间的差值，单位为毫秒
    const differenceInMilliseconds = Math.abs(date1 - date2);

    // 将毫秒转换为分钟
    const differenceInMinutes = differenceInMilliseconds / (1000 * 60);

    // 判断差值是否小于3分钟
    return differenceInMinutes < 3;
}