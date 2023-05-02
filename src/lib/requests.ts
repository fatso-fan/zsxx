import axios from 'axios'
import { apiUrl } from '@/school.config'

type Params = Record<string, string | number | boolean | undefined | null>

export default class requests {
  static get(url?: string, params?: Params) {
    const handler = axios.create({})

    return handler({
      method: 'get',
      url: `/school${url}`,
      params: {
        ...params,
      },
    })
  }

  static post(url: string, params?: Params) {
    const handler = axios.create({})

    return handler({
      method: 'post',
      url: `/school${url}`,
      data: params,
    })
  }
}
