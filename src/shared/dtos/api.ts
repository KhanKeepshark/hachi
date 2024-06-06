export interface ShopInfoModel {
    dogs: {
        id: number
        name: string
        health_level: string
        hunger_level: string
        image_url: string
        price: string
        is_purchased: boolean
    }[]
    foods: {
        duration_hours: number
        id: number
        image_url: string
        income_price: string
        is_consumed: boolean
        name: string
        price: string
    }[]
}

export interface UserInfoModel {
    id: string
    id_telegram: string
    first_name: string
    last_name: string
    username: string
    image_url: string
    balance: string
}

export interface DogConditionModel {
    user_id: number
    dog_id: number
    name: string
    health_level: string
    hunger_level: string
    image_url: string
    price: string
    last_feeding_time: string | null
}

export interface FoodInfoModel {
    id: number
    user_id: number
    food_id: string
    purchased_at: string
    is_consumed: boolean
}