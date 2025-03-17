import Banner from "./banner";
import LatestArrival from "./latest-arrival";
import MostPopular from "./most-popular";

const LandingPage = () => {
  return (
    <div className="py-12 bg-custom-background w-full">
      <Banner />
      <LatestArrival />
      <MostPopular />
    </div>
  );
};

export default LandingPage;
