import { HttpPostParams } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient<T, R> {
  async post (params: HttpPostParams<any>): Promise<void> {
    await axios(params.url)
  }
}
