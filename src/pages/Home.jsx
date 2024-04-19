import FAQ from "../components/Faq";
import AboutUs from "../components/Home/AboutUs";
import PaymentMethods from "../components/Home/PaymentMethods";
import Banking from "../components/Home/Banking";
import SupportedCountries from "../components/Home/SupportedCountries";
import StepsComponent from "../components/Home/stepsComponent";
import Banner from "../layouts/Banner";
import Nav from "../layouts/Nav";
import Footer from "../pages/Footer";

const Home = () => {
    return (
        <div>
            <Nav />
            <div>
                <Banner />
                <div className="-mt-52 md:mt-10 ">
                    <>
                        <AboutUs />
                        <StepsComponent />
                        <PaymentMethods />
                        <Banking />
                        <SupportedCountries />
                        <FAQ />
                        <Footer />
                    </>
                </div>
            </div>
        </div>
    );
};
export default Home;
