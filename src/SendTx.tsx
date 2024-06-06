import {useTonWallet, useIsConnectionRestored, useTonConnectUI} from "@tonconnect/ui-react";
import {useState} from "react";


export const SendTx = () => {
    const isConnectionRestored = useIsConnectionRestored();
    const wallet = useTonWallet();
    const [tonConnectUI] = useTonConnectUI();
    const [txInProgress, setTxInProgress] = useState(false);
    const [balanc, setBalanc] = useState<number>(0);


    let content: string;
    switch (true) {
        case !isConnectionRestored:
            content = 'Loading...';
            break;
        case txInProgress:
            content = 'Tx in progress';
            break;
        case !!wallet:
            content = 'Send transaction';
            break;
        default:
        case !wallet:
            content = 'Connect Wallet';
            break;
    }

    const addValance = () => {
        if (isConnectionRestored) {
            setBalanc(balanc + 1000)
        }
        localStorage.setItem("name", JSON.stringify(balanc));
    }



    const onClick = async () => {
        addValance()

        if (!wallet) {
            await tonConnectUI.connectWallet();
        } else {
            setTxInProgress(true)
            try {
                await tonConnectUI.sendTransaction({
                    validUntil: Math.floor(Date.now() / 1000) + 360,
                    messages: [
                        {
                            amount: '100000',
                            address: '0:e47a9c2da05fbc011a8642a2caf5a7f4370acd884c877bd01f38887ed030f5ad'
                        }
                    ]
                });
            } catch (e) {
                console.log(e);
            }

            setTxInProgress(false)
        }
    }

    return (
        <>
            <span>{balanc}</span>
            <button style={{margin: '50px'}} disabled={!isConnectionRestored || txInProgress} onClick={onClick}>
                {content}
            </button>
        </>

    )
}