import Layout from '@/layout/index.vue'

const routes = [
    {
        path: '/example',
        component: () => import('@/views/example/index.vue')
    },
    {
        path: '/',
        redirect: '/dashboard',
        component: Layout,
        children: [
            {
                path: '/dashboard',
                component: () => import('@/views/dashboard/index.vue')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue')
    }
]

export default routes
