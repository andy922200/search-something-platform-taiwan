import {
    createRouter, createWebHistory, RouteRecordRaw
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
    history: createWebHistory(process.env.BASE_URL),
    linkExactActiveClass: 'active',
    routes
})

export default router
