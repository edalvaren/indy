import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from 'src/store'

const router = new Router({
    base: '/',

    routes: routes.map(route => ({
        name: route.name,
        path: route.path,
        component: route.component
    }))
});

export default router;