<template>
  <div class="flex justify-center">
    <div class="text-center w-full py-4">
      <div v-for="(item, i) in date" :key="i">
        <img :src="item.url" class="m-auto" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import url from '@/assets/yetiane/yetiane_1.jpg'
import url2 from '@/assets/yetiane/yetiane_2.jpg'
import url3 from '@/assets/yetiane/yetiane_3.jpg'
import url4 from '@/assets/yetiane/yetiane_4.jpg'
import url5 from '@/assets/yetiane/yetiane_5.jpg'

import hd from '@/assets/huangdi/huangdi_1.jpg'
import hd1 from '@/assets/huangdi/huangdi_2.png'
import hd2 from '@/assets/huangdi/haungdi_3.png'
import hd3 from '@/assets/huangdi/haungdi_4.png'
import hd4 from '@/assets/huangdi/haungdi_5.png'

import hai from '@/assets/hai/hai.jpg'
import hai1 from '@/assets/hai/hai_1.png'
import hai2 from '@/assets/hai/hai_2.png'
import hai3 from '@/assets/hai/hai_3.png'

import mz from '@/assets/mzgn/mz.jpg'
import mz1 from '@/assets/mzgn/mz1.png'
import mz2 from '@/assets/mzgn/mz2.png'

import hc from '@/assets/hc/hc.jpg'
import hc1 from '@/assets/hc/hc1.png'
import hc2 from '@/assets/hc/hc2.png'
import hc3 from '@/assets/hc/hc3.png'

import bh from '@/assets/bhhs/bhhs.jpg'
import bh1 from '@/assets/bhhs/bhhs.png'
import bh2 from '@/assets/bhhs/bhhs1.png'
import bh3 from '@/assets/bhhs/bhhs2.png'
import bh4 from '@/assets/bhhs/bhhs3.png'
import bh5 from '@/assets/bhhs/bhhs4.png'

const date = ref()
const id = defineProps({
  id: {
    type: Number,
  },
})
const p = () => {
  if (id.id === 1) {
    // console.log(id.id)
    date.value = [
      { url },
      { url: url2 },
      { url: url3 },
      { url: url4 },
      { url: url5 },
    ]
  } else if (id.id === 2) {
    // console.log(id.id)
    date.value = [
      { url: hd },
      { url: hd1 },
      { url: hd2 },
      { url: hd3 },
      { url: hd4 },
    ]
  } else if (id.id === 3) {
    date.value = [{ url: hai }, { url: hai1 }, { url: hai2 }, { url: hai3 }]
  } else if (id.id === 4) {
    date.value = [{ url: mz }, { url: mz1 }, { url: mz2 }]
  } else if (id.id === 5) {
    date.value = [
      { url: bh },
      { url: bh1 },
      { url: bh2 },
      { url: bh3 },
      { url: bh4 },
      { url: bh5 },
    ]
  } else if (id.id === 6) {
    date.value = [{ url: hc }, { url: hc1 }, { url: hc2 }, { url: hc3 }]
  }
}
onMounted(() => {
  p()
})
watch(
  () => id.id,
  () => {
    p()
  }
)
</script>

<style lang="scss" scoped></style>
