<!-- eslint-disable vue/v-on-event-hyphenation -->
<template>
  <div class="w-full">
    <swiper
      :modules="modules"
      :slides-per-view="4"
      :slides-per-group="4"
      :space-between="50"
      :navigation="true"
      :loop="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <img src="@/assets/material/fj.jpg" class="w-full h-[200px]" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/material/fj2.png" class="w-full h-[200px]" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/material/fj3.jpg" class="w-full h-[200px]" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/material/fj4.jpg" class="w-full h-[200px]" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/material/fj5.jpg" class="w-full h-[200px]" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/material/fj6.jpg" class="w-full h-[200px]" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/material/fj7.jpg" class="w-full h-[200px]" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/material/imp.jpg" class="w-full h-[200px]" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const onSwiper = (swiper: any) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}

const modules = [Navigation, Pagination]
</script>

<style lang="scss" scoped>
.swiper {
  --swiper-theme-color: #ff6600; /* 设置Swiper风格 */
  --swiper-navigation-color: #f0f0f0; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px; /* 设置按钮大小 */
}
</style>
