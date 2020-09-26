import axios, {AxiosInstance} from 'axios'

const httpClient: AxiosInstance = axios.create({
    baseURL:"http://localhost:9000/"
})
export default httpClient
