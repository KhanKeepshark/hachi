import {FunctionComponent} from "react";

import dog1 from '../../assets/images/hachii.svg'
// import buy from '../../assets/images/buy.svg'
import { useMutation, useQuery } from "react-query";
import { allApi, IMAGE_BASE_URL } from "../../shared/api/allApi";
import { PixelBtn } from "../../components/pixelBtn";
import { useStore } from "../../shared/store";

const Shop: FunctionComponent = () => {
    const {setUserInfo, userInfo} = useStore()

   const {data, refetch} = useQuery({
        queryKey: "getShopInfo",
        queryFn: async () => allApi.getShopInfo().then((res) => res.data.data),
    })

    const {mutate: buyDog} = useMutation({
        mutationKey: "buyDog",
        mutationFn: async (dog_id: number) => allApi.buyDog(dog_id).then((res) => res.data),
        onSuccess: (data) => {
            setUserInfo(data.data)
            refetch()
        },
    })

    const {mutate: buyFood} = useMutation({
        mutationKey: "buyFood",
        mutationFn: async (food_id: number) => allApi.buyFood(food_id).then((res) => res.data),
        onSuccess: (data) => {
            setUserInfo(data.data)
            refetch()
        },
    })

    return (
        <div className="pages-content">
            <h2 className="pages-title">SHOP</h2>
            {data?.dogs.map((dog => (
                <div className="dog-shop" key={dog.id}>
                    <h5 className="shop-subtitle">{dog.name}</h5>
                    <div className="dog-content">
                        <div className="row dog-shop">
                            <img src={dog1} alt=""/>
                            <p className="price">{dog.price} ton</p>
                        </div>
                        <PixelBtn disabled={dog.is_purchased} onClick={() => buyDog(dog.id)} shopBtn btnText="BUY"/>
                    </div>
                </div>
            )))}
            <div className="food-shop">
                <h5 className="shop-subtitle">Foods</h5>
                {data?.foods.map((food => (
                    <div key={food.id} className="food-item">
                        <img src={IMAGE_BASE_URL + food.image_url} alt=""/>
                        <div className="price">{food.price} ton &gt; {food.income_price} ton</div>
                        <PixelBtn disabled={!food.is_consumed} onClick={() => buyFood(food.id)} shopBtn btnText="BUY"/>
                    </div>
                )))}
            </div>
        </div>
    );
};

export default Shop;