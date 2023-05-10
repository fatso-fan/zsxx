<template>
  <main class="bg-white viewport p-6">
    <a-breadcrumb>
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>知识海洋</a-breadcrumb-item>
      <a-breadcrumb-item>{{ policy.name }}</a-breadcrumb-item>
    </a-breadcrumb>
    <h2 class="text-3xl text-center font-bold">{{ policy?.name }}</h2>
    <div class="text-center mt-4">
      {{ policy?.author }}
    </div>
    <article
      class="article-content text-center mt-4"
      v-html="beautifyText(policy?.content)"
    />
  </main>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
// import { IPolicy } from '@/lib/types'
import { beautifyText } from '@/lib/utils'
import Requests from '@/lib/requests'

const { id } = useRoute().params
const policy = ref<any>({} as any)

// TODO: send request with `id` to fetch policy detail and assign to `policy.value`
console.log(id)

Requests.get('/school/course-data/info', {
  id: id as string,
}).then(
  (res) => {
    policy.value = res.data.data
  },
  (err) => {
    console.log(err)
  }
)
// const isskip = ref(true)
// const title = ref('济高人统办发〔2022〕6号 --关于印发《济南高新区聚人才稳增长20条政策措施实施细则》的通知(1).pdf')
</script>

<style lang="scss" scoped>
.section-title {
  @apply flex items-center border-dashed border-b-2 border-b-gray-200 text-xl;
  span {
    @apply text-xl leading-none bg-blue-600 text-white inline-flex items-center justify-center h-10 w-10 rounded mr-2;
  }
}
section > div {
  @apply my-4 leading-relaxed text-base tracking-wide;
}
li {
  @apply my-2;
}
.skip {
  &:hover {
    @apply underline;
  }
}
</style>
