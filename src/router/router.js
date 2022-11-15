import {createRouter, createWebHistory}  from 'vue-router'
import Auth from "@/modules/auth/Auth.vue"
import Registration from "@/modules/registration/Registration.vue"
import App from "@/modules/index/App.vue"

const routes = [
    {
        path: '/registration',
        component: Registration,
        name: 'registration'
    },

    {
        path: '/authorization',
        component: Auth,
        name: 'authorization'
    },

    {
        path: '/',
        component: App,
        name: 'home'
    },
]

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
})

export default router