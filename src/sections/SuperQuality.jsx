import { superQuailty } from "../assets/images";

import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const SuperQuality = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className=' flex justify-center items-center max-lg:flex-col'>
      <div className=' flex-1'>
        <h2
          className=' text-4xl font-bold font-palanquin mb-20'
          data-aos='fade-left'
        >
          iPhone 13 Graphite <span className=' text-picton-blue'>Super</span>{" "}
          Quality
        </h2>
        <p className=' info-text' data-aos='fade-left' data-aos-duration={1500}>
          Dive into the sleek sophistication of the iPhone 13 Pro graphite
          color. Explore how this modern hue reflects elegance and style,
          setting a new standard in smartphone design. Discover the allure of
          graphite, where innovation meets aesthetic excellence
        </p>
      </div>
      <div data-aos='flip-right'>
        <img src={superQuailty} alt='' width={530} />
      </div>
    </section>
  );
};

export default SuperQuality;
