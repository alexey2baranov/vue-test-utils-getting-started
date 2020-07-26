import Vue from "vue"
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: '/private',
        name: 'private',
    },
    {
        path: '/public',
        name: 'public',
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

router.beforeEach(async (to, from, next) => {
    if (to.name === 'private') {
        next({name: 'public'})
    } else {
        next()
    }
})

export default router
