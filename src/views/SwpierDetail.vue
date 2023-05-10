<template>
  <main class="viewport p-6 bg-white">
    <a-breadcrumb>
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>校园人物</a-breadcrumb-item>
      <a-breadcrumb-item>{{ policy.name }}</a-breadcrumb-item>
    </a-breadcrumb>
    <h2 class="text-2xl font-bold text-green-700 text-center mt-8">
      {{ policy.name }}
    </h2>
    <img
      v-if="policy.picture"
      :src="policy.picture"
      class="max-h-[300px] max-w-[800px] object-cover mx-auto my-6"
    />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Requests from '@/lib/requests'

const { id } = useRoute().params
const policy = ref<any>({} as any)

Requests.get('/backstage/master-class/info', {
  id: id as string,
}).then(
  (res) => {
    policy.value = res.data.data
  },
  (err) => {
    console.log(err)
  }
)
</script>

<style lang="scss" scoped></style>
