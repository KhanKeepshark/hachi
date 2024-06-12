import {Route, Routes} from "react-router-dom";


import Home from "./pages/Home";
import Faq from "./pages/FAQ";
import Menu from "./components/Menu";
import { Wallet } from "./pages/wallet";
import { useMutation, useQuery } from "react-query";
import { useStore } from "./shared/store";
import { authApi } from "./shared/api/auth";
import { ACCESS_TOKEN_KEY, allApi } from "./shared/api/allApi";
import Shop from "./pages/shop";
import { Toaster } from "react-hot-toast";

function App() {

    const {setUserInfo, telegramId, setDogInfo} = useStore()

    const {mutate: getDogInfo} = useMutation({
        mutationKey: "getUserInfo",
        mutationFn: async () => allApi.getUserInfo().then((res) => res.data),
        onSuccess: (data) => {
            setDogInfo(data.dog)
        },
    })
    useQuery({
        queryKey: "loginById",
        queryFn: async () => authApi.loginById(telegramId).then((res) => res.data),
        onSuccess: (data) => {
            localStorage.setItem(ACCESS_TOKEN_KEY, data.access_token)
            setUserInfo(data.data)
            getDogInfo()
        },
        retry: 1
    })

    return (
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/faq" element={<Faq/>}/>
                    <Route path="/wallet" element={<Wallet/>}/>
                </Routes>
                <Menu/>
                <Toaster/>
            </div>

    )
}

export default App