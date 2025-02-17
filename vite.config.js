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
        VueMacros(),
        Vue(),
        VueJsx(),
        ReactivityTransform(),

        SvgLoader({
            defaultImport: 'component'
        }),

        Components({
            resolvers: [
                AntDesignVueResolver({
                    importStyle: false
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
