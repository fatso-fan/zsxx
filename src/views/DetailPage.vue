<template>
  <main class="viewport p-6 bg-white">
    <a-breadcrumb>
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>教学教研</a-breadcrumb-item>
      <a-breadcrumb-item>{{ data.name }}</a-breadcrumb-item>
    </a-breadcrumb>
    <h2 class="text-2xl font-bold text-green-700 text-center mt-8">
      {{ data.name }}
    </h2>
    <span class="text-center block mt-4 text-gray-500">
      {{ data.creatorName }}发布于
      <span v-if="data.createDate" class="ml-2">
        {{ data.createDate }}
      </span>
    </span>
    <div
      v-if="data.title"
      class="max-w-3xl mx-auto border-l-4 border-gray-200 bg-gray-50 p-4 pl-6 italic my-4"
    >
      {{ data.title }}
    </div>

    <a-divider />

    <img
      v-if="data.src && false"
      :src="data.src"
      class="max-h-[300px] max-w-[800px] object-cover mx-auto my-6"
    />

    <article
      v-if="infoType === 'latest'"
      class="article-content text-center"
      v-html="beautifyText(data.content)"
    />
    <article
      v-else
      class="article-content"
      v-html="beautifyText(data.content || '')"
    />
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Requests from '@/lib/requests'
import { beautifyText } from '@/lib/utils'

const p = defineProps({
  infoType: {
    type: String,
    default: undefined,
  },
})
const data = ref({
  name: '',
  createDate: '',
  content: '',
  title: '',
  src: '',
  creatorName: '',
})
const { id } = useRoute().params
if (p.infoType === 'news') {
  Requests.get(`/backstage/news-information/info`, {
    id: id as string,
  }).then((res) => {
    console.log(res)
    data.value = res.data.data
  })
} else if (p.infoType === 'notice') {
  Requests.get(`/backstage/call-board/info`, {
    id: id as string,
  }).then((res) => {
    console.log(res)
    data.value = res.data.data
  })
} else if (p.infoType === 'latest') {
  Requests.get(`/backstage/news-spot/info`, {
    id: id as string,
  }).then((res) => {
    console.log(res)
    data.value = res.data.data
  })
}
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
