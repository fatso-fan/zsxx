<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <app-header />
  <transition name="fade">
    <router-view />
  </transition>
  <Footer />
</template>

<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
  /*定义进入开始和离开结束的透明度为0*/
  opacity: 0;
}
.fade-leave-to {
  transform: translateX(40px);
}
.fade-enter-to {
  transform: translateX(0px);
}
.fade-enter-to,
.fade-leave-from {
  /*定义进入结束和离开开始的透明度为1*/
  opacity: 1;
}
.fade-leave-active,
.fade-enter-active {
  transition: all 0.5s ease-out;
}
</style>
