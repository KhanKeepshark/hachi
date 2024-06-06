import { create } from "zustand"
import { persist } from "zustand/middleware"
import { DogConditionModel, FoodInfoModel, UserInfoModel } from "../dtos/api"

type StoreState = {
    userInfo: UserInfoModel | null
    dogInfo: DogConditionModel | null
    foodsInfo: FoodInfoModel[] | null
    setUserInfo: (userInfo: UserInfoModel | null) => void
    setDogInfo: (dogInfo: DogConditionModel | null) => void
    setFoodsInfo: (foodsInfo: FoodInfoModel[] | null) => void
}

export const useStore = create<StoreState>()(
    persist(
        (set) => ({
            userInfo: null,
            dogInfo: null,
            foodsInfo: null,
            setFoodsInfo: (foodsInfo) => set({foodsInfo}),
            setDogInfo: (dogInfo) => set({dogInfo}),
            setUserInfo: (userInfo) => set({userInfo})
        }),
        {
            name: 'store',
        }
    )
)