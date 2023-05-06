<template>
  <main class="viewport p-6 bg-white">
    <a-breadcrumb>
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>联系我们</a-breadcrumb-item>
    </a-breadcrumb>

    <section class="mt-6">
      <h1 class="list-page-title">联系我们</h1>

      <section class="flex mt-6">
        <div class="pr-8">
          <div
            class="border-l-4 border-yellow-400 bg-yellow-50 text-gray-700 px-6 py-4 mb-4"
          >
            如果您在任何服务时遇到困惑、错误或想要提供意见和建议，可以通过填写下方的表单反馈。
          </div>
          <div class="mt-2">
            <a-form
              :model="form"
              :style="{ width: '100%' }"
              @submit="sendMessage"
            >
              <a-form-item
                field="name"
                label="姓名"
                :rules="[{ required: true, message: '请填写该字段' }]"
              >
                <a-input v-model="form.name" placeholder="我们该怎样称呼您" />
              </a-form-item>
              <a-form-item
                field="phone"
                label="联系方式"
                :rules="[{ required: true, message: '请填写该字段' }]"
              >
                <a-input v-model="form.phone" placeholder="建议填写手机号" />
              </a-form-item>
              <a-form-item
                field="message"
                label="留言内容"
                :rules="[{ required: true, message: '请填写该字段' }]"
              >
                <a-textarea
                  v-model="form.message"
                  placeholder="描述您的问题"
                  :auto-size="{ minRows: 6, maxRows: 20 }"
                />
              </a-form-item>
              <div class="text-center">
                <a-button
                  html-type="submit"
                  size="large"
                  type="primary"
                  class="bg-blue-600"
                >
                  发送
                </a-button>
              </div>
            </a-form>
          </div>
        </div>
        <div class="w-[290px]">
          <div class="bg-gray-50 p-4">
            您也可以通过以下方式咨询、联系和反馈您的诉求。
            <ul class="mt-4">
              <li>
                <span class="label">枣山小学服务热线</span>
                <span class="val">(0532) 88888888</span>
              </li>
              <li>
                <span class="label">枣山小学招生热线</span>
                <span class="val">(0532) 88888888</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  message: '',
  type: -1,
  options: [],
  category: '',
})
const check = ref()
const radio = ref()
const sendMessage = () => {
  // console.log(form.category, form.options.length);
}
</script>

<style lang="scss" scoped>
.list-page-title {
  @apply text-xl text-gray-700 relative pl-6 before:bg-blue-500
    before:block before:absolute before:w-2 before:h-6 before:top-1/2 before:left-0 before:-translate-y-1/2;
}
* {
  ::v-deep .arco-col-5 {
    flex: 0 0 15%;
  }
  // :deep(arco-col-5){
  //   @apply w-1/3
  // }
}
li {
  @apply flex flex-col text-gray-600 mb-2;
  .label {
    @apply font-bold;
  }
  .val {
    @apply mt-2;
  }
}
</style>
