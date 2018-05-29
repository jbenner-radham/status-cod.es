import Vue from 'vue';
import Router from 'vue-router';
import StatusCode from './views/StatusCode.vue';
import StatusCodes from './views/StatusCodes.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: StatusCodes
        },
        {
            path: '/:value(\\d+)',
            component: StatusCode
        },
        {
            path: '/:display([1-5]xx)',
            component: StatusCodes
        }
    ]
});
