import FeatureCard from "../components/FeatureCard";
import ReviewCard from "../components/ReviewCard";
import { features, testimonials } from "../constants";
// import { ReviewCard } from "../components/ReviewCard.jsx";

import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Features = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className=' flex flex-col  justify-center items-center'>
      <div className=' mb-20'>
        <h2 className=' text-4xl font-bold font-palanquin' data-aos='fade-down'>
          Features
        </h2>
      </div>
      <div className=' grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 '>
        {features.map((item) => (
          <div data-aos='zoom-in-up'>
            <FeatureCard
              image={item.icon}
              text={item.text}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
