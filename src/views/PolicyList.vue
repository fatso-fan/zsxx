<template>
  <main class="viewport p-6 bg-white">
    <a-breadcrumb>
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>汇·政策</a-breadcrumb-item>
      <a-breadcrumb-item>政策查询</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="bg-gray-50 px-6 py-4 mt-6 relative">
      <div class="flex items-center justify-between">
        <div>
          <div class="relative inline-flex">
            <input
              v-model="filter.keyword"
              class="w-80 h-8 border outline-none pl-3 rounded-full focus:border-blue-500 focus:bg-blue-50 pr-8 text-sm"
              placeholder="输入关键字进行查找"
            />
            <a-button
              class="absolute right-8 top-0 !inline-flex !items-center justify-center h-8"
              shape="round"
              type="primary"
              @click="handleChange"
            >
              <s-icon class="mr-1 text-lg" :name="Search" />
              搜索
            </a-button>
          </div>

          <a-button class="-ml-4" shape="round" @click="resetFilter">
            重置检索
          </a-button>
        </div>

        <div class="text-sm">
          <span>政策太多？试试</span>
          <a-link
            class="text-red-600 hover:underline underline-offset-2"
            href="/policy/match"
            target="_blank"
          >
            智能匹配！
          </a-link>
        </div>
      </div>
      <a-divider />
      <div class="flex items-center mt-4">
        <div class="search-item w-4/12">
          <span class="label">适用对象</span>
          <a-radio-group
            v-model="filter.subject"
            class="text-radio-group"
            type="button"
            @change="handleChange"
          >
            <a-radio :value="-1">不限</a-radio>
            <a-radio :value="1">个人</a-radio>
            <a-radio :value="0">单位</a-radio>
          </a-radio-group>
        </div>
        <div class="search-item w-8/12">
          <span class="label">支持方式</span>
          <a-radio-group
            v-model="filter.type"
            class="text-radio-group"
            type="button"
            @change="handleChange"
          >
            <a-radio :value="-1">不限</a-radio>
            <a-radio :value="0">政策扶持</a-radio>
            <a-radio :value="1">服务保障</a-radio>
            <a-radio :value="2">项目资助</a-radio>
            <a-radio :value="3">生活补贴</a-radio>
          </a-radio-group>
        </div>
      </div>
    </div>

    <div class="mt-6 grid grid-cols-2 gap-4">
      <router-link
        v-for="item in policies"
        :key="item.id"
        :to="`/policy/${item.id}`"
        class="px-6 py-4 border border-gray-300 hover:border-blue-600 group"
      >
        <div class="text-lg font-bold text-gray-700 group-hover:text-blue-600">
          {{ item.title }}
        </div>
        <div class="mt-2">
          <span
            v-for="(tag, i) in item.tags"
            :key="i"
            class="s-tag px-1 py-1 mr-2"
          >
            {{ tag }}
          </span>
        </div>
        <div class="text-sm text-gray-500 mt-4">
          <div>申报时间：{{ item.dateRange }}</div>
          <div>适用区域：{{ item.region }}</div>
          <div>支持类型：{{ item.supportType }}</div>
          <div class="h-10 text-clip overflow-hidden ...">
            申报对象：{{ item.subject }}
          </div>
        </div>
      </router-link>
    </div>

    <div class="mt-6 flex justify-center">
      <a-pagination
        v-model:current="pagination.page"
        :total="pagination.total"
        @change="getList"
      />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { Search } from '@salmon-ui/icons'
import { useRoute } from 'vue-router'

// const { policies, filter, getList, pagination, handleChange, resetFilter } =
//   getPolicies()

const { type } = useRoute().query

if (type) {
  const subjectType = parseInt(type as string, 10)
  // filter.value.subject = subjectType >= 0 && subjectType <= 1 ? subjectType : -1
}

// getList()
</script>

<style lang="scss" scoped>
.search-item {
  @apply flex items-center;
  .label {
    @apply font-bold mr-2 text-gray-700;
  }
}
</style>
