import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Popular from "../Popular/Popular";


const Home = () => {
    return (
        <div className="bg-gray-100 ">
            <Navbar></Navbar>
            <Banner></Banner>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    );
};

export default Home;