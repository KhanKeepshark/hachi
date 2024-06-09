import {useState} from 'react';
import { BackendTokenContext } from '../../BackendTokenContext';
// import { BackendDemoApi } from '../../BackendDemoApi';
import styles from './wallet.module.scss';
import withdraw from '../../assets/images/withdraw.svg'
import deposit from '../../assets/images/deposit.svg'
import closeX from '../../assets/images/X.svg'
import connectWallet from '../../assets/images/connectwallet.png'
import tonecoinIcon from '../../assets/images/toncoin.png'
import { Deposit } from './deposit';
import { Withdraw } from './withdraw';
import {useTonAddress, useTonConnectModal, useTonConnectUI, useTonWallet} from "@tonconnect/ui-react";
import { useStore } from '../../shared/store';

// import {SendTx} from "../SendTx.tsx";
// import {BackendDemoApi} from "../BackendDemoApi.tsx";
// import {BackendTokenContext} from "../BackendTokenContext";



export const Wallet = () => {
    const [token, setToken] = useState<string | null>(null);
    const [show, setShow] = useState("");
    const { open } = useTonConnectModal()
    const wallet = useTonWallet();
    const userFriendlyAddress = useTonAddress();
    const [tonConnectUI] = useTonConnectUI();
    const {userInfo, telegramId} = useStore();

    return (
        <BackendTokenContext.Provider value={{token, setToken}}>
            <div className={styles.main}>
                {!wallet && (
                    <div className={styles.walletlBtn}>
                        <img src={connectWallet} onClick={() => open()} height={50} alt="connectWallet" />
                    </div>
                )}
                {!!wallet && show === "" && (
                    <>
                        <h1 className='pages-title'>Wallet</h1>
                        <div>{"telegramId: " + telegramId}</div>
                        <div className={styles.walletInfo}>
                            <div className={styles.balance}>
                                {userInfo?.balance}
                                <img src={tonecoinIcon} height={20} alt="tonecoinIcon" />
                            </div>
                            <div className='flex-center'>
                                <div className={styles.walletKey}>{userFriendlyAddress}</div>
                                <div onClick={() => tonConnectUI.disconnect()} >
                                    <img src={closeX} alt="closeX" height={20} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.content}>
                            {/* <TonConnectButton style={{position: "absolute", top: "0"}} /> */}
                            <img src={deposit} height={80} alt="deposit" onClick={() => setShow("deposit")} />
                            <img src={withdraw} height={80} alt="withdraw" onClick={() => setShow("withdraw")}/>
                        </div>
                    </>
                )}
                {show === "deposit" && (
                    <Deposit back={() => setShow("")} />
                )}
                {show === "withdraw" && (
                    <Withdraw back={() => setShow("")} />
                )}
                {/* <h2 className="pages-title">Wallet</h2>
                <div className="pouch">
                    <div className="balance">0 ton</div>
                    <div>
                        <TonConnectButton/>
                    </div>
                </div> */}
                {/*<div style={{height: '140px'}}>*/}
                {/*    <AddressInfo/>*/}
                {/*    <WalletInfo/>*/}
                {/*</div>*/}
                {/* <SendTx/> */}
                {/*<Settings />*/}
                
                {/* <BackendDemoApi/> */}
            </div>
        </BackendTokenContext.Provider>

    );
};