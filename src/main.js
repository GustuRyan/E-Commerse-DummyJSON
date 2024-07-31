import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import Products from './components/ProductsView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/products', component: Products },
    ]
});

const pinia = createPinia();
const app = createApp(App)

app.use(router);
app.use(pinia);

app.mount('#app')





