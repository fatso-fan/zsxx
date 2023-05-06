<template>
  <main class="bg-white viewport p-6">
    <a-breadcrumb>
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>支持政策</a-breadcrumb-item>
      <a-breadcrumb-item>{{ policy.title }}</a-breadcrumb-item>
    </a-breadcrumb>
    <h2 class="text-3xl text-center font-bold py-8">{{ policy?.title }}</h2>
    <div class="flex mt-4">
      <div class="px-8 py-4 w-8/12">
        <section>
          <h3 class="section-title">
            <span>
              <s-icon :name="FileListFill" />
            </span>
            支持内容
          </h3>
          <div v-html="beautifyText(policy?.content || '')" />
        </section>
        <section>
          <h3 class="section-title">
            <span>
              <s-icon :name="EditCircleFill" />
            </span>
            支持条件
          </h3>
          <div v-html="beautifyText(policy?.condition || '')" />
        </section>
        <section>
          <h3 class="section-title">
            <span>
              <s-icon :name="GroupFill" />
            </span>
            责任部门
          </h3>
          <div v-html="beautifyText(policy?.dept || '')" />
        </section>
        <section>
          <h3 class="section-title">
            <span>
              <s-icon :name="PhoneFill" />
            </span>
            联系方式
          </h3>
          <div v-html="beautifyText(policy?.contact || '')" />
        </section>
      </div>
      <div class="w-4/12 pl-8">
        <ul class="bg-gray-50 border-t-4 border-blue-600 p-4">
          <li>
            <b>支持方式：</b>
            {{ policy?.supportType }}
          </li>
          <li>
            <b>适用区域：</b>
            {{ policy?.region }}
          </li>
          <li>
            <b>支持对象：</b>
            {{ policy?.subject }}
          </li>
          <li v-if="policy?.dateRange">
            <b>申报时段：</b>
            {{ policy?.dateRange }}
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="mt-2">
      <div class=" text-black text-xl">【相关附件】</div>
      <ul v-if="isskip" class="mt-4">
        <li>
          <a class="skip text-blue-500 cursor-pointer">
            {{ title }}
          </a>
        </li>
      </ul>
    </div> -->
  </main>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import {
  FileListFill,
  EditCircleFill,
  GroupFill,
  PhoneFill,
} from '@salmon-ui/icons'
import { beautifyText } from '@/lib/utils'
import Requests from '@/lib/requests'

const { id } = useRoute().params
const policy = ref()

// TODO: send request with `id` to fetch policy detail and assign to `policy.value`
console.log(id)

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
