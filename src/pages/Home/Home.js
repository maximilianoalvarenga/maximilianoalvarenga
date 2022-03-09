import Header from "../../components/Header/Header";
import MainHome from "./MainHome/MainHome";
import { HomeStyle } from "./HomeStyle";
import {  useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation()

    console.log(location.pathname)
    return (
        <HomeStyle>
            <Header />
            <MainHome />
        </HomeStyle>
    )
}

export default Home;