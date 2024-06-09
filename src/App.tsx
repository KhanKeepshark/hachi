import {Route, Routes} from "react-router-dom";


import Home from "./pages/Home";
import Faq from "./pages/FAQ";
import Menu from "./components/Menu";
import { Wallet } from "./pages/wallet";
import { useQuery } from "react-query";
import { useStore } from "./shared/store";
import { authApi } from "./shared/api/auth";
import { ACCESS_TOKEN_KEY } from "./shared/api/allApi";
import Shop from "./pages/shop";

function App() {

    const {setUserInfo, telegramId} = useStore()
    useQuery({
        queryKey: "loginById",
        queryFn: async () => authApi.loginById(telegramId).then((res) => res.data),
        onSuccess: (data) => {
            localStorage.setItem(ACCESS_TOKEN_KEY, data.access_token)
            setUserInfo(data.data)
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
            </div>

    )
}

export default App