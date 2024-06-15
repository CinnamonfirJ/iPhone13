import ProductCard from "../components/ProductCard";
import { products } from "../constants";

import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Products = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className='mt-20 flex flex-1 flex-col justify-center max-md:items-center items-start'>
      <div data-aos='fade-right'>
        <h2 className=' text-4xl font-palanquin font-bold leading-normal mb-20 '>
          Our Popular <span className=' text-picton-blue'>Colors</span>
        </h2>
        <p className=' info-text'>
          Experience its sleek design, powerful features, and cutting-edge
          technology right at your finger tips!
        </p>
      </div>

      <div>
        <div
          className=' grid gap-12  w-full grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mt-20'
          data-aos='zoom-up'
        >
          {products.map((items) => (
            <div>
              <ProductCard key={items.id} {...items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
