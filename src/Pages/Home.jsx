import { Helmet } from "react-helmet";
import Banner from "../Components/Banner";
import CategoriesSection from "../Components/CategoriesSection";
import ContactUs from "../Components/ContactUs";
import CraftItemSection from "../Components/CraftItemSection";
import StatsSection from "../Components/StatsSection";
import { HelmetProvider } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - Artisanal Crafts</title>
                <link rel="canonical" href="http://mysite.com//" />
            </Helmet>
            </HelmetProvider>
            <Banner></Banner>
            <CraftItemSection></CraftItemSection>
            <CategoriesSection></CategoriesSection>
            <StatsSection></StatsSection>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;