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
      class="max-h-[300px] max-w-[800px] object-cover mx-auto my-10"
    />
    <section>
      <h3 class="section-title">
        <span>
          <s-icon :name="AwardFill" />
        </span>
        教师荣誉
      </h3>
      <div v-html="policy.honor" />
    </section>
    <section>
      <h3 class="section-title">
        <span>
          <s-icon :name="BubbleChart" />
        </span>
        教师座右铭
      </h3>
      <div v-html="policy.motto" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import {
  FileListFill,
  EditCircleFill,
  GroupFill,
  AwardFill,
  BubbleChart,
  BookOpen,
} from '@salmon-ui/icons'
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

<style lang="scss" scoped>
.section-title {
  @apply flex items-center border-dashed border-b-2 border-b-gray-200 text-xl;
  span {
    @apply text-xl leading-none bg-green-600 text-white inline-flex items-center justify-center h-10 w-10 rounded mr-2;
  }
}
section {
  @apply mt-4;
  div {
    @apply mt-2;
  }
}
</style>
