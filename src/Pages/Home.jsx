import Banner from "../Components/Banner";
import ContactUs from "../Components/ContactUs";
import CraftItemSection from "../Components/CraftItemSection";
import StatsSection from "../Components/StatsSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CraftItemSection></CraftItemSection>
            <StatsSection></StatsSection>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;