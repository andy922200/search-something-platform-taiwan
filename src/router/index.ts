import {
    createRouter, createWebHashHistory, RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw & {label: string}> = [
    {
        path: '/',
        name: 'Motel',
        label: 'taiwanMotelSearch',
        component: () => import('../views/Motel/Motel.vue')
    },
    {
        path: '/about',
        name: 'About',
        label: 'about',
        component: () => import('../views/About/About.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: '404 Not Found',
        label: '404 Not Found',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    linkExactActiveClass: 'active',
    routes
})

export default router
