import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
    mode: 'hash',
    history: createWebHashHistory(),
    routes
})

export default router
