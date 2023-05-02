<template>
  <main class="viewport">
    <!-- <img src="@/assets/img/banner.jpg" class="w-full" /> -->
    <SpSwiper />
    <section class="flex mt-2">
      <aside class="asdio_left">
        <div>
          <div class="asdio_left_ur">
            <span class="text-white text-lg font-black mt-2 tracking-widest">
              最新导读
            </span>
            <router-link to="/latest">更多>></router-link>
          </div>
          <div class="flex flex-wrap">
            <router-link
              v-for="item in latestGuide"
              :key="item.id"
              :to="`/latest/${item.id}`"
              class="flex items-center mt-4 gap-10 w-1/2 cursor-pointer"
            >
              <div class="p-4 bg-green-500 text-white">
                <div class="font-black text-lg">{{ item.month }}</div>
                <div>{{ item.createDate }}</div>
              </div>
              <div class="text-balck">
                <div class="text-green-600 font-black text-lg">
                  {{ item.name }}
                </div>
                <div class="mt-2">{{ item.content }}</div>
              </div>
            </router-link>
          </div>
        </div>
      </aside>
      <aside class="asdio_right px-4">
        <div class="relative border p-6">
          <span class="absolute top-0 right-0 w-[65px] h-[65px] mod"></span>
          <div class="mt-4">
            <ul>
              <li
                v-for="(item, i) in list"
                :key="i"
                class="c-list-item cursor-pointer"
              >
                <router-link :to="`/news/${item.id}`">
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="text-right mt-4">
            <router-link to="/news">更多>></router-link>
          </div>
        </div>
        <a-card :style="{ width: '100%' }" title="新闻资讯" class="mt-2">
          <template #extra>
            <router-link to="/notice">更多</router-link>
          </template>
          <div>
            <ul>
              <li
                v-for="(item, i) in news"
                :key="i"
                class="c-list-item cursor-pointer"
              >
                <router-link :to="`/notice/${item.id}`">
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </a-card>
      </aside>
    </section>
    <section class="w-full flex mt-2">
      <aside class="asdio_left">
        <div class="asdio_left_ur">
          <span class="text-white text-lg font-black mt-2 tracking-widest">
            名师课堂
          </span>
        </div>
        <div class="flex gap-5 mt-4">
          <a-carousel
            class="w-1/2"
            :auto-play="true"
            indicator-type="dot"
            show-arrow="hover"
          >
            <a-carousel-item v-for="image in mingshi" :key="image.id">
              <img
                :src="image.picture"
                :style="{
                  width: '100%',
                  height: '100%',
                }"
              />
            </a-carousel-item>
          </a-carousel>
          <div class="mt-4">
            <ul>
              <li v-for="item in mingshi" :key="item.id" class="c-list-item">
                <a href="/">{{ item.motto }}</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div class="asdio_right px-4">
        <a-card :style="{ width: '100%' }" title="学校视频" class="mt-2">
          <div>
            <video controls>
              <source
                src="http://www.hzyllh.com/tpl/yuanlin/images/videos/2019.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </a-card>
      </div>
    </section>
    <section class="w-full mt-2">
      <aside class="asdio_left !w-full">
        <div class="asdio_left_ur">
          <span class="text-white text-lg font-black mt-2 tracking-widest">
            校园风景
          </span>
        </div>
        <div class="py-4">
          <swpier />
        </div>
      </aside>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import swpier from '@/components/Swiper.vue'
import SpSwiper from '@/components/SpSwiper.vue'
import requests from '@/lib/requests'

const images = [
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
]
// 新闻资讯
const news = ref()
const limit = ref(5)
const page = ref(1)
requests
  .get('/backstage/news-information/page', {
    limit: limit.value,
    page: page.value,
  })
  .then((res) => {
    // console.log(res.data.data.list)
    news.value = res.data.data.list
  })
// 通知公告
const list = ref()
requests
  .get('/backstage/call-board/page', {
    limit: limit.value,
    page: page.value,
  })
  .then((res) => {
    // console.log(res.data.data.list)
    list.value = res.data.data.list
  })
// 最新导读
const latestGuide = ref()
requests
  .get('/backstage/news-spot/page', {
    limit: limit.value,
    page: page.value,
  })
  .then((res) => {
    // console.log(res.data.data.list)
    latestGuide.value = res.data.data.list
  })
// 名师课堂
const mingshi = ref()
requests
  .get('/backstage/master-class/page', {
    limit: limit.value,
    page: page.value,
  })
  .then((res) => {
    // console.log(res.data.data.list)
    mingshi.value = res.data.data.list
  })
</script>

<style lang="scss" scoped>
.asdio_left {
  background: url('@/assets/img/new_daodu.jpg');
  @apply w-2/3 bg-no-repeat px-4;
  .asdio_left_ur {
    @apply flex justify-between items-center px-14 h-[64px] bg-top;
  }
}
.asdio_right {
  @apply w-1/3;
}
.mod {
  background: url('@/assets/img/mod-tngzhi-tips.png');
}
.nav-item {
  @apply px-4 py-2 block bg-gray-50 mb-2;

  &.active {
    @apply bg-red-500 text-white font-bold relative;
  }
}
</style>
