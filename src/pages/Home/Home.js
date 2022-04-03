import Header from "../../components/Header/Header";
import MainHome from "./MainHome/MainHome";
import { HomeStyle } from "./HomeStyle";
import {  useLocation } from 'react-router-dom';
import { useEffect } from "react";
import * as util from '../../services/utils';
const Home = () => {
    const location = useLocation()
    
    useEffect(() => {
        const title = util.setTitlePage(location.pathname);
        document.title = title;
    },[location.pathname]);

    return (
        <HomeStyle>
            <Header />
            <MainHome />
        </HomeStyle>
    )
}

export default Home;