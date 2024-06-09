import axios from 'axios'
import { useStore } from '../store'

export const authClient = axios.create({
  baseURL: "https://hachikogame.uno/api/api/",
})

authClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
      config.headers['X-API-KEY'] = "VWOT2CaBnrI4Wt5F0hun6kKlg5ftL1ej83d179b8"
  }
  return config
})

authClient.interceptors.response.use((res) => res, async (error) => {
    const originalRequest = error.config
    const isIdExist = error.response.data.message === "Telegram ID already exists"
    if (isIdExist){
        return Promise.reject(error)
    }
    if (error.response.status === 422 && !originalRequest._retry) {
        try {
            const telegramId = useStore.getState().telegramId
            await authApi.registerById(telegramId)
            return axios(originalRequest)
        } catch (e) {
            return Promise.reject(e)
        }
    }
    return Promise.reject(error)
})

export const authApi = {
    registerById: (id_telegram: string) => {
        return authClient.post('/register', {id_telegram})
    },
    loginById: (id_telegram: string) => {
        return authClient.post('/login', {id_telegram})
    }
}