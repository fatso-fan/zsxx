<template>
  <main class="viewport p-6">
    <a-breadcrumb class="mt-2">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>学生天地</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="flex justify-center viewport gap-4 py-2">
      <div class="w-1/3 text-center">
        <div class="title-block">
          <h2 class="text-xl title mt-2">图书列表</h2>
          <div class="triangle" />
        </div>
        <div
          v-for="item in list"
          :key="item.id"
          class="h-[40px] w-1/2 border p-2 text-center cursor-pointer m-auto mt-6"
          :class="{ active: item.id === idx }"
          @click="IsIdex(item.id)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="w-2/3">
        <shu :id="idx" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import shu from '@/components/shu.vue'

const activeNav = ref()
const list = ref([
  { name: '野小鸭', id: 1 },
  { name: '皇帝的新装', id: 2 },
  { name: '海的女儿', id: 3 },
  { name: '拇指姑娘', id: 4 },
  { name: '卖火柴的小女孩', id: 5 },
  { name: '笨汉汉斯', id: 6 },
])
const idx = ref(1)
const IsIdex = (id: number) => {
  idx.value = id
}
</script>

<style lang="scss" scoped>
.active {
  @apply bg-green-500 text-white;
}
.title-block {
  color: rgb(253, 97, 106);
  display: inline-block;
  position: relative;
  background-color: blue;
  color: white;
  text-align: center;
  padding: 0 28px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px 5px 5px 5px;
  letter-spacing: 2px;
}
.title-block .triangle {
  color: rgb(98, 189, 255);
  position: absolute;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top: 5px solid blue;
  border-right: 5px solid blue;
  left: 0;
  bottom: -10px;
}
</style>
