<template>
  <main class="viewport p-6 bg-white">
    <a-breadcrumb>
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>教学教研</a-breadcrumb-item>
    </a-breadcrumb>
    <section class="flex mt-6">
      <div class="w-[200px] flex-shrink-0 flex-grow-0">
        <ul class="">
          <router-link
            v-for="item in sideNavs"
            :key="item.key"
            :class="['nav-item', activeNav === item.key ? 'active' : undefined]"
            :to="`/${item.key}`"
          >
            {{ item.name }}
          </router-link>
        </ul>
      </div>
      <div class="flex-grow pl-10">
        <ul>
          <li v-for="item in list" :key="item.id" class="c-list-item">
            <router-link :to="`/${infoType}/${item.id}`">
              <div class="title">{{ item.name }}</div>
              <span class="time">{{ item.createDate }}</span>
            </router-link>
          </li>
        </ul>

        <div class="flex mt-6 items-center justify-center">
          <a-pagination
            v-model:current="page"
            :total="total"
            @change="getInformationList(typeValue as number)"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { infoTypeMap } from '@/lib/types'
import useInformation from './use-information'

defineProps({
  infoType: {
    type: String,
    default: undefined,
  },
})

const route = useRoute()
const type = ref()
const typeValue = ref()
const activeNav = ref()
const sideNavs = [
  { name: '新闻资讯', key: 'news' },
  { name: '通知公告', key: 'notice' },
  { name: '最新导读', key: 'latest' },
]

const { getInformationList, list, page, total } = useInformation()

const init = (newPath: string) => {
  // console.log(newPath);
  const path = newPath.replace('/', '')
  page.value = 1
  type.value = path
  typeValue.value = infoTypeMap.get(type.value) as number
  activeNav.value = path
  getInformationList(typeValue.value as number)
}

init(route.path)

watch(
  () => route.path,
  (val) => {
    init(val)
  }
)
</script>

<style lang="scss" scoped>
.nav-item {
  @apply px-4 py-2 block bg-gray-50 mb-2;

  &.active {
    @apply bg-green-500 text-white font-bold relative
      before:absolute before:block before:left-2 before:top-1/2 before:w-3 before:h-3 before:rounded before:bg-green-50
      before:-translate-y-1/2 pl-6;
  }
}
</style>
