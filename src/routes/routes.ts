/* eslint-disable @typescript-eslint/no-explicit-any */
import Home from '../pages/Home';
import About from '../pages/About';

export interface IRoutes {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    props?: any;
}

export const routes: IRoutes[] = [
    {
        path: '/',
        name: 'Home Page',
        component: Home,
        exact: true,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        exact: false,
    },
];
