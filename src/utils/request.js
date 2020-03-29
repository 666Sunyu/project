import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://47.95.118.243:8080/api/'

})
export default instance
