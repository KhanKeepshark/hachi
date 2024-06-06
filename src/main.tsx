import React from 'react'
import ReactDOM from 'react-dom/client'


import App from './App.tsx'
import './styles.scss'
import {TonConnectUIProvider} from "@tonconnect/ui-react";
import {BrowserRouter} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <TonConnectUIProvider
                manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
                actionsConfiguration={{
                    twaReturnUrl: 'https://t.me/test19141_bot/testanfw811'
                }}
            >
                <App/>
            </TonConnectUIProvider>
        </BrowserRouter>
        </QueryClientProvider>

    </React.StrictMode>,
)
