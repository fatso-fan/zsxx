<template>
  <main class="viewport p-6 bg-white">
    <a-breadcrumb>
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>校园人物</a-breadcrumb-item>
      <a-breadcrumb-item>{{ data.name }}</a-breadcrumb-item>
    </a-breadcrumb>
    <h2 class="text-2xl font-bold text-green-700 text-center mt-8">
      {{ data.name }}
    </h2>
    <img
      v-if="data.src && false"
      :src="data.src"
      class="max-h-[300px] max-w-[800px] object-cover mx-auto my-6"
    />
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
