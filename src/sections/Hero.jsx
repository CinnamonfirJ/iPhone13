import { phone1 } from "../assets/images";
import Button from "../components/Button";
import { statistics } from "../constants";

// import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import { arrowright } from "../assets/icons";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className=' padding-x flex justify-evenly gap-20 mt-6  items-center max-lg:flex-col max-lg:mt-20'>
      <div className=' flex flex-1 flex-col'>
        <h1
          className=' text-8xl max-md:text-4xl capitalize  text-white-400  font-montserrat font-bold leading-normal'
          data-aos='fade-right'
        >
          Elevate Your{" "}
          <span className=' font-palanquin leading-none text-picton-blue'>
            Mobile{" "}
          </span>
          Experience
        </h1>
        <p className=' info-text  mt-10' data-aos='fade-right'>
          The iPhone 13 Pro combines cutting-edge features, stunning design, and
          powerful performance. Whether you’re a photography enthusiast, a
          multitasker, or simply someone who appreciates elegance, the iPhone 13
          Pro has something for everyone
        </p>
        <div className=' mt-11 w-48' data-aos='fade-right'>
          <Button text='Shop Now' imgURL={arrowright} />
        </div>
        <div
          className=' flex justify-start items-start mt-11 gap-16 font-montserrat'
          data-aos='fade-right'
        >
          {statistics.map((items) => (
            <div>
              <h1 className=' text-3xl font-bold'>{items.value}</h1>
              <p>{items.label} </p>
            </div>
          ))}
        </div>
      </div>
      <div data-aos='fade-up'>
        <img src={phone1} alt='' width={420} />
      </div>
    </section>
  );
};

export default Hero;
