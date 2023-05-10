import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SIcon from '@/components/SIcon.vue'
import App from './App.vue'
import 'swiper/css'

import '@arco-design/web-vue/dist/arco.css'
import '@/styles/tailwindcss.scss'
import '@/styles/index.css'

import router from './lib/router'

const app = createApp(App)
app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.component('SSwiper', Swiper)
app.component('SIcon', SIcon)
app.component('SSlide', SwiperSlide)
app.mount('#app')
