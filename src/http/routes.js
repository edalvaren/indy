import Main from '../features/dashboard/main'
import About from '../views/About'
import MainScreen from '../components/HMI/MainScreen'
import AlarmWrapper from '../components/Alarms/AlarmWrapper'
import SpiralSettings from "../views/SpiralSettings";
import AlarmsMain from '../features/alarms/main';

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
      path: '/Settings',
      name: 'settings',
      component: SpiralSettings
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