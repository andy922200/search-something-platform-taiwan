import {
    createRouter, createWebHashHistory, RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Motel',
        component: () => import('../views/Motel/Motel.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About/About.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    linkExactActiveClass: 'active',
    routes
})

export default router
