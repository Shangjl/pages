import {isNumeric} from "@/global/utils/index.js";

/**
 * 写入支付宝校验结果写入workbook的sheet
 * @param option
 * @param option.systemDataAmountGroup 现金银行系统金额分组数据
 * @param option.zhiFuBaoData 支付宝数据
 */
export function writeZhiFuBaoCheckResultSheet(option) {
    const {
        workbook,
        systemDataAmountGroup,
        zhiFuBaoData
    } = option
    // 添加sheet
    const worksheet = workbook.addWorksheet('支付宝');
    // 设置 sheet 的默认行高
    worksheet.properties.defaultRowHeight = 20;
    // 设置列
    worksheet.columns = [
        {header: '交易号', key: 'tradingNumber', width: 40},
        {header: '付款时间', key: 'payTime', width: 25},
        {header: '交易对方', key: 'tradingTarget', width: 30},
        {header: '金额', key: 'amount', width: 10},
        {header: '收/支 ', key: 'incomeExpenditure', width: 10},
        {header: '原因 ', key: 'reason', width: 30},
    ];
    const rows = zhiFuBaoData.filter(row => {
        const systemAmountAlike = systemDataAmountGroup[row[9]];
        if (!systemAmountAlike) {
            console.error('支付宝数据没找到相同金额', row)
            row.reason = '没找到相同金额';
            // 没找到相同金额
            return true
        }

        /*const zhiFuBaoPayTime = row[3].substring(10, 15).replace(':', '');

        const systemTimeLike = systemAmountAlike.find(like => {
            const replace = like.timeStr.replace(':', '');
            if (!isNumeric(replace)) {
                return false
            }
            const a = parseInt(replace);
            const b = parseInt(zhiFuBaoPayTime);
            return Math.abs(a - b) < 3
        });
        if (!systemTimeLike) {
            console.error('时间超过3分钟')
            console.error('系统相同金额数据', systemAmountAlike)
            console.error('支付宝数据', row)
            row.reason = '时间超过3分钟'
            // 时间超过3分钟
            return true
        }*/
        return false
    }).map(m => {
        return {
            tradingNumber: m[0],
            payTime: m[3],
            tradingTarget: m[7],
            amount: m[9],
            incomeExpenditure: m[10],
            reason: m.reason
        }
    })
    worksheet.addRows(rows);
}