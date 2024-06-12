import {FunctionComponent} from "react";
import dog from '../assets/images/hachii.svg'
import { useStore } from "../shared/store";

const Home: FunctionComponent = () => {

    const {dogInfo} = useStore()
    
    return (
        <div className="main">
            <div className="main-dog">
                {dogInfo && (
                    <img className='dog' src={dog} alt=""/>
                )}
            </div>
        </div>
    );
};

export default Home;