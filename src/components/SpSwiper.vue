<template>
  <div class="swiperbox relative mt-2" @mousemove="ssss">
    <swiper
      :effect="'fade'"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      :loop="true"
      class="swiper h-full"
    >
      <swiper-slide class="slide">
        <img :src="url" alt="" />
      </swiper-slide>
      <swiper-slide class="slide">
        <img :src="url1" alt="" />
      </swiper-slide>
      <swiper-slide class="slide">
        <img :src="url2" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper'
import url from '@/assets/material/fj4.jpg'
import url1 from '@/assets/material/banner1.jpg'
import url2 from '@/assets/material/imp3.jpg'
import 'swiper/css'

import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// 要闻
const pinnedNews = ref()
const vshow = ref(false)
const ssss = () => {
  vshow.value = true
}
const modules = [EffectFade, Navigation, Pagination, Autoplay]
</script>
<style scoped lang="scss">
.slide {
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    animation-name: zoom;
    animation-duration: 9s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
}
@keyframes zoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}
.red {
  background: url('@/assets/red.png') no-repeat;
  background-size: cover;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
