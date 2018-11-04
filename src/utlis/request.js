import axios from 'axios'
// create an axios instance
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 8000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
  console.log('请求开始')
  // Do something before request is sent
  return config
}, error => {
  // Do something with request error
  // console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {
    console.log('请求结束')
    // code
    const code = response.status
    if (code !== 200) {
      return Promise.reject(response.data)
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
})

export default service
