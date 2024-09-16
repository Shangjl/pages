import ExcelJS from "exceljs";
import {saveAs} from 'file-saver';

import Debounce from "@/global/utils/debounce.js";
import PapaParse from "papaparse";

/**
 * 导出&下载excel
 * @param option
 * @param {Array} option.columnsSetting -- 列设置 ex  [{header: '交易创建时间', key: 'createTime', width: 22},{header: '付款时间', key: 'payTime', width: 22},]
 * @param {Array} option.rows -- 行数据 ex [{createTime: '2024-09-16', payTime: '2024-09-16'}]
 * @param {String} option.fileName -- 下载文件名称 ex 导出.xlsx
 */
export function exportExcel(option) {

    const {
        columnsSetting,
        rows,
        fileName
    } = option

    const workbook = new ExcelJS.Workbook();
    // 添加sheet
    const worksheet = workbook.addWorksheet('Sheet');
    // 设置 sheet 的默认行高
    worksheet.properties.defaultRowHeight = 20;
    // 设置列
    worksheet.columns = columnsSetting;
    worksheet.addRows(rows);
    workbook.xlsx.writeBuffer().then(data => {
        const blob = new Blob([data], {type: ''});
        saveAs(blob, fileName);
    });
}

/**
 *
 * @param option
 * @param option.file excel文件
 * @param {Function} [option.filter] 过滤方法
 * @param {Function} [option.map] map转换方法
 * @return {*}
 */
export function importExcel(option) {
    const {
        file,
        filter = () => true,
        map = row => row
    } = option
    return new Promise(resolve => {
        const result = [];

        const debounce = Debounce(function () {
            resolve(result.filter(filter).map(map))
        }, 50)

        const workbook = new ExcelJS.Workbook();
        workbook.xlsx.load(file).then(() => {
            const worksheet = workbook.worksheets[0];

            worksheet.eachRow({includeEmpty: true}, (row, rowNumber) => {
                result.push(row.values)
                debounce()
            })
        })

    })
}

/**
 *
 * @param option
 * @param option.file csv文件
 * @param {Function} [option.filter] 过滤方法
 * @param {Function} [option.map] map转换方法
 * @return {*}
 */
export function importCsv(option) {

    const {
        file,
        filter = () => true,
        map = row => row
    } = option
    return new Promise(resolve => {
        PapaParse.parse(file, {
            /*header: true,
            skipEmptyLines: true,
            */
            encoding: "gb2312",
            complete: result => {
                const rows = result.data;
                resolve(rows.filter(filter).map(map));
            }
        });
    })
}

export function importExcelOrCsv(option) {
    const {
        file
    } = option

    const fileName = file.name;

    if (fileName.endsWith('csv')) {
        return importCsv(option);
    }

    if (fileName.endsWith('xlsx') || fileName.endsWith('xls')) {
        return importExcel(option);
    }


}