import Layout from '@/layout/index.vue'
import { AI, BITCOIN, DASHBOARD, ECMASCRIPT, EXAMPLE, FRONTEND, JAVASCRIPT, NETWORK_PROTOCOL } from './names'

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'ai',
                name: AI,
                component: () => import('@/views/ai/index.vue')
            },
            {
                path: 'frontend',
                name: FRONTEND,
                component: () => import('@/views/frontend/index.vue')
            },
            {
                path: 'bitcoin',
                name: BITCOIN,
                component: () => import('@/views/bitcoin/index.vue')
            },
            {
                path: 'javascript',
                name: JAVASCRIPT,
                component: () => import('@/views/javascript/index.vue')
            },
            {
                path: 'ecmascript',
                name: ECMASCRIPT,
                component: () => import('@/views/ecmascript/index.vue')
            },
            {
                path: 'networkProtocol',
                name: NETWORK_PROTOCOL,
                component: () => import('@/views/networkProtocol/index.vue')
            }
        ]
    },
    {
        path: '/example',
        name: EXAMPLE,
        component: () => import('@/views/example/index.vue')
    },

    {
        path: '/',
        redirect: '/dashboard',
        component: Layout,
        children: [
            {
                path: '/dashboard',
                name: DASHBOARD,
                component: () => import('@/views/dashboard/index.vue')
            }
        ]
    }
]

export default routes
