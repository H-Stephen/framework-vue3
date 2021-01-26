import Home from './pages/Home';
import About from './pages/About';

export default [
    {
        name: 'About',
        path: '/about/',
        component: About,
    },
    {
        name: 'Home',
        path: '(.*)',
        component: Home,
    },
];
