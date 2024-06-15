import ReviewCard from "../components/ReviewCard";
import { testimonials } from "../constants";
// import { ReviewCard } from "../components/ReviewCard.jsx";

import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const CustomersReview = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className=' flex flex-col  justify-center items-center'>
      <div className=' mb-20'>
        <h2 className=' text-4xl font-bold font-palanquin' data-aos='fade-down'>
          What Everyone Is Saying
        </h2>
      </div>
      <div className=' grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 '>
        {testimonials.map((item) => (
          <div data-aos='zoom-in-up'>
            <ReviewCard
              image={item.image}
              user={item.user}
              text={item.text}
              company={item.company}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomersReview;
