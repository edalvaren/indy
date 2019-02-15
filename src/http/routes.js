

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import(/* webpackChunkName: "dashboard" */  'src/features/dashboard/main.vue'),
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('src/views/About.vue')
    }
]

export default routes;