import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import VirtualHome from "../../components/VirtualHome";
import Invest from "../../components/Invest";
import Personal from "../../components/Personal";
import Location from "../../components/Location";
import ClientReview from "../../components/ClientReview";

const Home = (props) => {
    return (
        <>
            <Navbar />
            <Banner />
            <VirtualHome />
            <Invest />
            <Personal />
            <Location />
            <ClientReview />
            <Footer />
        </>
    );
};

export default Home;