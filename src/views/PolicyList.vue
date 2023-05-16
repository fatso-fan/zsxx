<template>
  <main class="viewport p-6 bg-white">
    <a-breadcrumb>
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>知识海洋</a-breadcrumb-item>
      <a-breadcrumb-item>资料查询</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="bg-gray-50 px-6 py-4 mt-6 relative">
      <div class="flex items-center justify-between">
        <div>
          <div class="relative inline-flex">
            <input
              v-model="filter.keyword"
              class="w-80 h-8 border outline-none pl-3 rounded-full focus:border-green-500 focus:bg-green-50 pr-8 text-sm"
              placeholder="输入关键字进行查找"
            />
            <a-button
              class="absolute right-0 top-0 !inline-flex !items-center justify-center h-8"
              shape="round"
              type="primary"
              status="success"
              @click="handleChange"
            >
              <s-icon class="mr-1 text-lg" :name="Search" />
              搜索
            </a-button>
          </div>

          <a-button class="" shape="round" @click="resetFilter">
            重置检索
          </a-button>
        </div>
      </div>
      <a-divider />
      <div class="flex items-center mt-4">
        <div class="search-item w-4/12">
          <span class="label">课程分类</span>
          <a-radio-group
            v-model="filter.type"
            class="text-radio-group"
            type="button"
            @change="handleChange"
          >
            <a-radio :value="1">语文</a-radio>
            <a-radio :value="2">数学</a-radio>
            <a-radio :value="3">英语</a-radio>
          </a-radio-group>
        </div>
      </div>
    </div>

    <div class="mt-6 grid grid-cols-3 gap-4">
      <router-link
        v-for="item in policies"
        :key="item.id"
        :to="`/policy/${item.id}`"
        class="px-6 py-4 border border-gray-300 hover:border-green-700 group"
      >
        <div class="text-lg font-bold text-gray-700 group-hover:text-green-700">
          {{ item.name }}
        </div>
        <div class="mt-2">
          {{ item.author }}
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

<script setup lang="ts">
import { Search } from '@salmon-ui/icons'
import { useRoute } from 'vue-router'
import getPolicies from './use-policies'

const { policies, filter, getList, pagination, handleChange, resetFilter } =
  getPolicies()

const { type } = useRoute().query

if (type) {
  const subjectType = parseInt(type as string, 10)
  filter.value.subject = subjectType >= 0 && subjectType <= 1 ? subjectType : -1
}

getList()
</script>

<style lang="scss" scoped></style>
