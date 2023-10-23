import About from "./About";
import Banner from "./Banner";
import Call from "./Call";
import Products from "./Products";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
            <About></About>
            <Services></Services>
            <Call></Call>
            <Products></Products>
            </div>
        </div>
    );
};

export default Home;