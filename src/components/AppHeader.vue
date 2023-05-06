<template>
  <header>
    <div class="bg">
      <div class="flex w-1/3 ml-6">
        <img src="@/assets/header/logo.png" class="w-[120px] h-[100px]" />
        <img src="@/assets/header/logo-text.png" class="w-[130px] h-[100px]" />
      </div>
      <div class="w-1/3">
        <div class="bg-warp h-[50px] w-full">
          <img src="@/assets/header/header_rigt.png" class="h-full" />
        </div>
      </div>
    </div>
    <div class="bg-green-700 py-2">
      <div class="w-full flex items-center pr-4 gap-8 pl-20">
        <router-link
          to="/"
          class="link"
          :class="{ active: $route.path === '/home' }"
        >
          <div class="text-lg tracking-wider">首页</div>
        </router-link>
        <router-link
          v-for="(item, i) in navigationList"
          :key="i"
          :to="item.path"
          class="link"
          :class="{ active: isRouteLinkActive(i) }"
        >
          <div class="text-lg tracking-wider">{{ item.name }}</div>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { infoTypeMap } from '@/lib/types'

const route = useRoute()

const navigationList = ref([
  { name: '学校概括', path: '/overview' },
  { name: '教学教研', path: '/news' },
  { name: '政策支持 ', path: '/Policy' },
  { name: '学生天地', path: '/student' },
  { name: '联系我们', path: '/FeedBackPage' },
])
const isRouteLinkActive = (idx: number) => {
  if (idx === 1) {
    return (
      infoTypeMap.has(route.path.replace('/', '')) ||
      route.path.includes('/news/')
    )
  }
  return route.path === navigationList.value[idx].path
}
</script>

<style lang="scss" scoped>
.link {
  @apply h-full inline-flex items-center justify-center cursor-pointer text-white font-normal px-5 py-3 mx-6 rounded-b-md;
  &.active {
    @apply bg-white text-green-700;
  }
}
.bg {
  background: url('@/assets/header/header.jpg');
  @apply flex items-center justify-center;
}
@keyframes showhide {
  0% {
    opacity: 0;
    width: 450px;
  }
  25% {
    opacity: 1;
    width: 450px;
  }
  50% {
    opacity: 0;
    width: 0;
  }
  75% {
    opacity: 1;
    width: 450px;
  }
  100% {
    opacity: 0;
    width: 450px;
  }
}
.bg-warp {
  animation: showhide 15s infinite;
  overflow: hidden;
}
</style>
