import axios from 'axios'

export const authClient = axios.create({
  baseURL: "http://77.91.75.140/api/",
})

authClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
      config.headers['X-API-KEY'] = "VWOT2CaBnrI4Wt5F0hun6kKlg5ftL1ej83d179b8"
  }
  return config
})

authClient.interceptors.response.use((res) => res, (error) => {
    if (error.response.status === 422) {
        try {
            authApi.registerById
        } catch (e) {
            console.log(e)
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