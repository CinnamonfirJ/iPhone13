import Button from "../components/Button";

import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <div data-aos='fade-down' className=' flex justify-center items-center'>
        <h1 className=' text-4xl font-bold font-palanquin mb-20 '>
          Join Our <span className=' text-picton-blue'>News</span> Letter
        </h1>
      </div>

      <div
        className=' flex justify-between items-center w-full max-md:flex-col max-md:justify-center gap-8'
        data-aos='fade-down'
      >
        <p className=' max-w-lg'>
          Stay up-to-date with the latest news, offers and updates abput the
          iPhone 13. Subscribe now to be the first to know about exciting
          features, release dates, and exclusive deals straight to your inbox
        </p>
        <form className=' flex flex-col gap-2 w-[70%] ' data-aos='fade-up'>
          <input
            type='text'
            placeholder='subscribe@example.com'
            required
            className=' flex justify-center items-center gap-2 text-lg font-montserrat leading-none border border-slate-400 py-4 px-7 rounded-full text-black'
          />
          <Button text='Subscribe Now' />
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
