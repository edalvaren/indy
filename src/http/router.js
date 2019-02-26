import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'



Vue.use(Router);

const router = new Router({
    routes: routes.map(route => ({
        name: route.name,
        path: route.path,
        component: route.component
    }))
});

export default router;