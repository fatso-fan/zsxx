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
              class="flex items-center mt-6 gap-10 w-1/2 cursor-pointer"
            >
              <div class="p-4 bg-green-500 text-white">
                <div>{{ item.createDate }}</div>
              </div>
              <div class="text-balck">
                <div class="text-green-600 font-black text-lg">
                  {{ item.name }}
                </div>
                <div class="mt-2 truncate w-48">
                  {{ item.title }}
                </div>
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
                <router-link :to="`/notice/${item.id}`">
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="text-right mt-4">
            <router-link to="/notice">更多>></router-link>
          </div>
        </div>
        <a-card :style="{ width: '100%' }" title="新闻资讯" class="mt-2">
          <template #extra>
            <router-link to="/news">更多</router-link>
          </template>
          <div>
            <ul>
              <li
                v-for="(item, i) in news"
                :key="i"
                class="c-list-item cursor-pointer truncate"
              >
                <router-link :to="`/news/${item.id}`">
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
            校园人物
          </span>
        </div>
        <div class="flex gap-5 mt-4">
          <a-carousel
            class="w-2/5 relative h-[280px]"
            :auto-play="true"
            show-arrow="hover"
            indicator-type="never"
          >
            <a-carousel-item v-for="image in mingshi" :key="image.id">
              <router-link :to="`/swpier/${image.id}`">
                <img
                  :src="image.picture"
                  :style="{
                    width: '100%',
                    height: '100%',
                  }"
                />
                <span
                  class="absolute text-lg w-full p-2 text-center bg-gray-600 opacity-60 bottom-0 left-0 text-white"
                >
                  {{ image.name }}老师
                </span>
              </router-link>
            </a-carousel-item>
          </a-carousel>
          <div class="mt-4 w-3/5">
            <div class="flex items-center">
              <div class="search-item flex flex-wrap">
                <a-radio-group
                  v-model="type"
                  class="text-radio-group"
                  type="button"
                  @change="handleChange"
                >
                  <a-radio :value="10">一年级</a-radio>
                  <a-radio :value="20">二年级</a-radio>
                  <a-radio :value="30">三年级</a-radio>
                  <a-radio :value="40">四年级</a-radio>
                  <a-radio :value="50">五年级</a-radio>
                  <a-radio :value="60">六年级</a-radio>
                </a-radio-group>
              </div>
            </div>
            <div class="h-[180px] flex flex-wrap">
              <div
                v-for="item in date"
                :key="item.id"
                class="mt-1 w-full text-green-600 hover:text-white hover:bg-gray-300 p-1"
              >
                <router-link :to="`/latest/${item.id}`">
                  {{ item.name }}
                </router-link>
              </div>
            </div>
            <a-pagination
              v-model:current="pages"
              v-model:page-size="limits"
              class="mt-2"
              :total="totals"
              @change="handleChange"
            />
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
    <section class="w-full mt-6">
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
import { Search } from '@salmon-ui/icons'
import { useRouter } from 'vue-router'
import swpier from '@/components/Swiper.vue'
import SpSwiper from '@/components/SpSwiper.vue'
import requests from '@/lib/requests'

const keyword = ref()
const type = ref(10)
const date = ref()
const totals = ref()
const pages = ref(1)
const limits = ref(5)
const handleChange = () => {
  requests
    .get('/backstage/news-spot/page', {
      limit: limits.value,
      page: pages.value,
      name: '',
      type: type.value,
    })
    .then((res) => {
      date.value = res.data.data.list
      totals.value = res.data.data.total
    })
}
// 新闻资讯
const news = ref<any[]>()
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
const list = ref<any[]>()
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
type s = {
  name: string
  month: string
  id: string | number
  content: string
  createDate: string
  title: string
}
const latestGuide = ref<s[]>()
requests
  .get('/backstage/news-spot/page', {
    limit: 12,
    page: page.value,
  })
  .then((res) => {
    console.log(res.data.data)
    latestGuide.value = res.data.data.list
  })
// 名师课堂
const mingshi = ref<any[]>()
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
