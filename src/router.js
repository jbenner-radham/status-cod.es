import Vue from 'vue';
import Router from 'vue-router';
import StatusCodes from './views/StatusCodes.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'all',
            component: StatusCodes
        }
    ]
});
