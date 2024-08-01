import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import ProductsView from './components/ProductsView.vue'
import MyCartView from './components/MyCartView.vue'
import LoginView from './components/LoginView.vue'
import RegistView from './components/RegistView.vue'
import ProductDetailView from './components/ProductDetailView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/products',
            children: [
                { path: '', name: 'products', component: ProductsView },
                { path: 'detail', name: 'product-detail', component: ProductDetailView },
                { path: 'my-cart', name: 'my-cart', component: MyCartView },
            ],
        },
        {
            path: '/auth',
            children: [
                { path: 'login', name: 'login', component: LoginView },
                { path: 'register', name: 'register', component: RegistView }
            ],
        },
    ]
});

const pinia = createPinia();
const app = createApp(App)

app.use(router);
app.use(pinia);

app.mount('#app')





