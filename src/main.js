import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Main from './components/Main.vue'
import Menu from './components/Menu.vue'
import Contact from './components/Contact.vue'
import WaterFall3 from './components/WaterFall3.vue'
import WaterFall5 from './components/WaterFall5.vue'
import LoginModal from './components/LoginModal.vue'
import CartModal from './components/CartModal.vue'
import OrderModal from './components/OrderModal.vue'
import LoadingModal from './components/LoadingModal.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)


app.component('header-component', Header)
    .component('footer-component', Footer)
    .component('main-component', Main)
    .component('menu-component', Menu)
    .component('contact-component', Contact)
    .component('water-fall3', WaterFall3)
    .component('water-fall5', WaterFall5)
    .component('login-modal', LoginModal)
    .component('cart-modal', CartModal)
    .component('order-modal', OrderModal)
    .component('loading-modal', LoadingModal)

app.mount('#app')
