<template>
  <main class="viewport p-6 bg-white">
    <a-breadcrumb>
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>教学教研</a-breadcrumb-item>
      <a-breadcrumb-item>{{ data.name }}</a-breadcrumb-item>
    </a-breadcrumb>
    <h2 class="text-2xl font-bold text-gray-700 text-center mt-8">
      {{ data.name }}
    </h2>
    <span class="text-center block mt-4 text-gray-500">
      {{ data.createDate }}
    </span>

    <div
      v-if="data.creatorName"
      class="max-w-3xl mx-auto border-l-4 border-gray-200 bg-gray-50 p-4 pl-6 italic my-4"
    >
      {{ data.creatorName }}
    </div>

    <a-divider />

    <img
      v-if="data.src && false"
      :src="data.src"
      class="max-h-[300px] max-w-[800px] object-cover mx-auto my-6"
    />

    <article class="article-content" v-html="data.content" />
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Requests from '@/lib/requests'
import { IList } from '@/lib/types'

const data = ref({
  name: '',
  createDate: '',
  content: '',
  creatorName: '',
  src: '',
})
// const isskip = ref(false)
const list = ref<IList[]>([])
const { id } = useRoute().params
Requests.get(`/backstage/news-spot/${id}`).then((res) => {
  console.log(res)
  data.value = res.data.data
})
</script>

<style lang="scss" scoped>
.article-content {
  :deep(img) {
    margin: auto !important;
  }
}
.skip {
  &:hover {
    @apply underline;
  }
}
</style>
