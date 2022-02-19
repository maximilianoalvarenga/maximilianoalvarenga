import Header from "../../components/Header/Header";
import MainHome from "../../components/MainHome/MainHome";
import { HomeStyle } from "./HomeStyle";

const Home = () => {
    return (
        <HomeStyle>
            <Header />
            <MainHome />
        </HomeStyle>
    )
}

export default Home;