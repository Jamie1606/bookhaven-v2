import Header from "@/components/shared/header";
import Banner from "./banner";
import LatestArrival from "./latest-arrival";
import MostPopular from "./most-popular";
import Footer from "@/components/shared/footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <LatestArrival />
      <MostPopular />
      <Footer />
    </>
  );
};

export default LandingPage;
