import { Outlet } from "react-router-dom";
import Nav from "../pages/Home/Shared/Nav/Nav";
import Footer from "../pages/Home/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;