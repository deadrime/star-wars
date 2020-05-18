import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/'
})

instance.interceptors.response.use(
  response => {
    if (response.data) {
      if (response.data.results) {
        response.data.results.forEach(addId)
        response.data.results.forEach(replaceUnknown)
      } else if (response.data.url) {
        addId(response.data)
        replaceUnknown(response.data)
      }
    }
    return response.data
  },
  err => Promise.reject(err)
)

function addId(data) {
  const url = data.url
  const splitedUrl = url.split('/')
  data.id = splitedUrl[splitedUrl.length - 2]
}

function replaceUnknown(data) {
  Object.entries(data).map(([key, value]) => {
    if (value === 'unknown') {
      data[key] = undefined
    }
  })
  return data
}
export default instance
