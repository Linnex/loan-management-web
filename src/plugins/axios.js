import axios from 'axios'

const _axios = axios.create({
  // baseURL: 'http://localhost:8000/'
  baseURL: 'https://loan-sys.herokuapp.com/'
})

export default _axios
