import Vue from 'vue';
import App from './App.vue';
import router from './router';
import StatusCodes from './plugins/StatusCodes';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(StatusCodes);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
