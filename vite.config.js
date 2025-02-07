import { resolve } from 'path'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'

import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

import SvgLoader from 'vite-svg-loader'

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },

    plugins: [
        VueMacros() /* 支持各种宏定义，如 defineRender */,
        Vue(),
        VueJsx(),
        ReactivityTransform() /* 支持以 $ref 直接定义变量，使用时不需要带出 value */,

        SvgLoader({
            defaultImport: 'component'
        }) /* svg 支持以组件的方式引入 */,

        Components({
            /* 默认会自动引入 components 下面的组件 */
            resolvers: [
                /* 自动引入  ant-design 组件 */
                AntDesignVueResolver({
                    importStyle: false // css in js
                })
            ]
        })
    ],

    css: {
        postcss: {
            plugins: [tailwindcss, autoprefixer]
        }
    }
})
