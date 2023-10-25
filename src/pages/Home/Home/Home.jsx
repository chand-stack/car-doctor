import About from "./About";
import Banner from "./Banner";
import Call from "./Call";
import ChoseUs from "./ChoseUs";
import Products from "./Products";
import Services from "./Services";
import Team from "./Team";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
            <About></About>
            <Services></Services>
            <Call></Call>
            <Products></Products>
            <Team></Team>
            <ChoseUs></ChoseUs>
            <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;