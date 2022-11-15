import { createRouter, createWebHistory } from 'vue-router';
import StatusCodeView from '../views/StatusCodeView.vue';
import StatusCodesView from '../views/StatusCodesView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: StatusCodesView
        },
        {
            path: '/:value(\\d+)',
            component: StatusCodeView
        },
        {
            path: '/:display([1-5]xx)',
            component: StatusCodesView
        }
    ]
});

export default router;
