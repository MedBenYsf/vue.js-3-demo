import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: '/contacts',
		name: 'Contacts',
		component: Contact
	},
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		component: NotFound
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
