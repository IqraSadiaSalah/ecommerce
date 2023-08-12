import HomeBanner from "@/components/HomeBanner";
import HomePromotion from "@/components/HomePromotion";
import HomeSlider from "@/components/HomeSlider";


const Home = () => {
  
  
  alert("Please Sign In before you purchase anything");
  return (
    <div>
      <HomeBanner />
      <HomePromotion />
      {/* @ts-ignore  */}
      <HomeSlider />
    </div>
  );
};

export default Home;
