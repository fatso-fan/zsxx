import { ref } from 'vue'
// import type { IInfomation } from '@/lib/types'
import Requests from '@/lib/requests'

const useInformation = () => {
  const list = ref<any[]>()
  const page = ref(1)
  const limit = ref(5)
  const total = ref(0)

  const getInformationList = (infoType: number) => {
    console.log(infoType)
    if (infoType === 7) {
      Requests.get('/backstage/news-information/page', {
        limit: limit.value,
        page: page.value,
      }).then((res) => {
        list.value = res.data.data.list
        console.log(list.value)
        total.value = res.data.data.total
      })
    } else if (infoType === 1) {
      Requests.get('/backstage/call-board/page', {
        limit: limit.value,
        page: page.value,
      }).then((res) => {
        list.value = res.data.data.list
        console.log(list.value)
        total.value = res.data.data.total
      })
    } else if (infoType === 6) {
      Requests.get('/backstage/news-spot/page', {
        limit: limit.value,
        page: page.value,
      }).then((res) => {
        list.value = res.data.data.list
        total.value = res.data.data.total
        console.log(list.value)
      })
    }
  }

  return {
    list,
    page,
    total,
    getInformationList,
  }
}

export default useInformation
