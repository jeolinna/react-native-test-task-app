import axios from 'axios'
import Config from 'react-native-config'

export const api = axios.create({
  // eslint-disable-next-line dot-notation
  baseURL: Config['API_BASE_URL'],
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})
