import { createApp } from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles'
import 'vuetify/dist/vuetify.min.css'
import { createVuetify, VCard, VLayout, VAppBar, VAppBarNavIcon, VToolbarTitle, VSpacer, VBtn, VNavigationDrawer, VList, VMain, VCardText } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import axios from 'axios'


const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App);
axios.defaults.baseURL = 'https://localhost:7249/api'; 
app.config.globalProperties.$axios = axios;
app.use(vuetify);
app.mount('#app');
