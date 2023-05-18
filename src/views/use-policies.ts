import { ref } from 'vue'
import { throttle } from 'lodash'
import Requests from '@/lib/requests'

const getPolicies = () => {
  const policies = ref<any[]>([])
  const filter = ref<any>({
    subject: -1,
    keyword: '',
    tag: -1,
    type: '',
  })
  const pagination = ref({
    page: 1,
    total: 0,
    limit: 10,
  })

  const isLoading = ref(true)

  const getList = throttle(() => {
    isLoading.value = true
    Requests.get('/school/course-data/page', {
      limit: pagination.value.limit,
      page: pagination.value.page,
      name: filter.value.keyword,
      type: filter.value.type,
    }).then(
      (res) => {
        console.log(res)
        policies.value = res.data.data.list
        pagination.value.total = res.data.data.total
      },
      (err) => {
        // console.log(err)
      }
    )
  }, 50)

  const handleChange = () => {
    pagination.value.page = 1
    getList()
  }

  const resetFilter = () => {
    pagination.value.page = 1
    filter.value.keyword = ''
    filter.value.type = -1
    getList()
  }

  return {
    policies,
    getList,
    filter,
    pagination,
    handleChange,
    resetFilter,
    isLoading,
  }
}

export default getPolicies
