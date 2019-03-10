import Main from '../features/dashboard/main'
import About from '../views/About'
import AlarmsMain from '../features/alarms/main';
import SettingsMain from '../features/spiral-settings/main';

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/Alarms',
        name: 'alarms',
        component: AlarmsMain
    },
    {
        path: '/settings',
        name: 'settings',
        component: SettingsMain
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About
    }
];

export default routes;