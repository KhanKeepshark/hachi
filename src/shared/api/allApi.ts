import axios, { AxiosResponse } from 'axios'
import { DogConditionModel, FoodInfoModel, ShopInfoModel, UserInfoModel } from '../dtos/api'

export const apiClient = axios.create({
  baseURL: "https://hachikogame.uno/api/api/",
})

export const ACCESS_TOKEN_KEY = 'authToken'
export const IMAGE_BASE_URL = "https://hachikogame.uno/api/storage/"

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY)
    config.headers['Authorization'] = `Bearer ${token}`
    return config
})

export const allApi = {
    getShopInfo: (): Promise<AxiosResponse<{data: ShopInfoModel}>> => apiClient.get('/shop'),
    buyDog: (dog_id: number): Promise<AxiosResponse<{data: UserInfoModel, dog: DogConditionModel}>> => apiClient.post('/dog/buy', {dog_id}),
    buyFood: (food_id: number): Promise<AxiosResponse<{data: UserInfoModel, food: FoodInfoModel}>> => apiClient.post('/food/buy', {food_id}),
    getUserInfo: () => apiClient.get(`/user/`),
}