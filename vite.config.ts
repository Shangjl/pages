import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import chalk from 'chalk'
import {pxtovw} from './config/plugin'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver, VantResolver} from 'unplugin-vue-components/resolvers'
import VueJsx from '@vitejs/plugin-vue-jsx'
/*const mode = `${process.env.NODE_ENV}`
const {
    VITE_BASE_URL
} = loadEnv(mode, process.cwd())*/

// 引入多页面配置文件
const projects = require('./scripts/multiPages.json')
// 获取npm run dev后缀 配置的环境变量
//运行路径baseUrl
const npm_config_baseUrl = process.env.npm_config_baseUrl || '/'
//移动端样式？
const npm_config_mobile = process.env.npm_config_mobile
console.log('npm_config_mobile', npm_config_mobile)
const npm_config_page: string = process.env.npm_config_page || ''
// 命令行报错提示
const log = (str: string) => console.log(str)

//获取指定的单页面入口
const getEnterPages = () => {
    // const PAGE_PATH = path.resolve(__dirname, "./src/projects"); //指定要查询的目录
    // const entryFiles: any[] = fs.readdirSync(PAGE_PATH); //获取到指定目录下的所有文件名
    const log = console.log
    if (!npm_config_page) {
        log(
            chalk.red('--------------请在命令行后以 `--page=页面名称` 格式指定页面名称！---------------')
        )
        throw new Error()
    } else {
        log(chalk.yellow('当前页面为:', process.env.npm_config_page || ''))
    }
    // console.log(entryFiles)
    const filterArr = projects.filter(
        (item: any) => item.page.toLowerCase() === npm_config_page.toLowerCase()
    )
    if (!filterArr.length) {
        log(chalk.red('-----------------------不存在此页面，请检查页面名称！-------------------------'))
        throw new Error()
    }
    return {
        [npm_config_page]: path.resolve(__dirname, `src/projects/${npm_config_page}/index.html`)
    }
}

// https://vitejs.dev/config/
export default defineConfig({
    root: path.resolve(__dirname, `./src/projects/${npm_config_page}`), //项目根目录（index.html 文件所在的位置
    base: npm_config_baseUrl, //公共基础路径
    envDir: path.resolve(__dirname), //用于加载 .env 文件的目录
    plugins: [
        vue(),
        VueJsx(),
        AutoImport({
            imports: ['vue', 'vue-router'],
            resolvers: [
                ElementPlusResolver(),
                VantResolver(),
                IconsResolver({
                    prefix: 'Icon',
                }),
            ]
        }),
        Components({
            extensions: ['vue', 'jsx', 'js'],
            resolvers: [
                // Auto register icon components
                // 自动注册图标组件
                IconsResolver({
                    prefix: 'icon',
                    enabledCollections: ['ep'],
                }),
                // Auto register Element Plus components
                // 自动导入 Element Plus 组件
                ElementPlusResolver(),
                VantResolver()
            ]
        }),
        Icons({
            autoInstall: true,
            compiler: 'vue3'
        }),
    ],
    // 构建配置
    build: {
        outDir: path.resolve(__dirname, `docs/${npm_config_page}`), // 指定输出路径
        assetsInlineLimit: 4096, //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求
        emptyOutDir: true, //Vite 会在构建时清空该目录
        rollupOptions: {
            //  rollup配置  https://cn.rollupjs.org/configuration-options/#input
            input: {
                ...getEnterPages()
            },
            output: {
                assetFileNames: '[ext]/[name]-[hash].[ext]',
                chunkFileNames: 'js/[name]-[hash].js',
                entryFileNames: 'js/[name]-[hash].js',
                compact: true,
                manualChunks: (id: string) => {
                    if (id.includes('node_modules')) {
                        let string = id.toString().split('node_modules/')[1].split('/')[0];
                        if (string[0] === '.') {
                            string = string.substring(1);
                        }
                        return string.toString() // 拆分多个vendors
                    }
                }
            }
        },
        // Vite 将替换 modules 为 ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14']
        target: 'modules'
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, './src'),
            '@/projects': path.join(__dirname, './src/projects')
        }
    },
    css: {
        postcss: {
            plugins: npm_config_mobile ? [pxtovw] : []
        }
    },
    server: {
        host: '0.0.0.0',
        // host: 'localhost',
        port: 8888,
        hmr: true,
        open: false,
        https: false
    }
})
