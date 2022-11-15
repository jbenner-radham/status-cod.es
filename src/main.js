import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import StatusCodes from './plugins/StatusCodes';

const app = createApp(App);

app.use(router);
app.use(StatusCodes);

app.mount('#app');
