import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { products } from "../constants";
import Button from "../components/Button";

import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const ProductPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });

    // document.documentElement.scrollHeight
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const { color } = useParams();

  return (
    <section className=' bg-gray-950'>
      <div>
        <h2
          className=' text-4xl font-palanquin font-bold leading-normal mb-20 '
          data-aos='fade-right'
        >
          iPhone 13 - {color}
        </h2>
        {products.map((item) => (
          <div data-aos='fade-up'>
            {item.color === color ? (
              <div>
                <div className=' flex justify-between items-center gap-28 max-md:flex-col max-md:gap-16'>
                  <div>
                    <img src={item.imgURL} alt='' />
                  </div>
                  <div>
                    <h2 className=' text-2xl font-montserrat font-bold leading-normal mt-12'>
                      {item.name} - {item.color}
                    </h2>
                    <h3 className=' text-xl font-montserrat font-bold leading-normal '>
                      {item.price}
                    </h3>
                    <div className=' flex flex-col justify-center items-start gap-4 my-6'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet assumenda unde asperiores voluptatum pariatur quas,
                        explicabo quos maiores impedit tenetur.
                      </p>
                      <Button text={"Buy Now"} />
                    </div>
                  </div>
                </div>

                <div className=' flex flex-col justify-center items-start gap-4 my-6'>
                  <h3 className=' text-xl font-montserrat font-bold leading-normal '>
                    Description
                  </h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sint ullam, doloribus, alias libero ea harum odit a
                    explicabo distinctio voluptas exercitationem accusamus
                    expedita, iusto eum omnis magnam. Possimus, exercitationem
                    ratione?
                  </p>
                </div>
                <div className=' flex flex-col justify-center items-start gap-4 my-6'>
                  <h3 className=' text-xl font-montserrat font-bold leading-normal '>
                    About the item
                  </h3>
                  <ul>
                    <li>- Lorem ipsum dolor sit.</li>
                    <li>- Lorem ipsum dolor sit.</li>
                    <li>- Lorem ipsum dolor sit.</li>
                    <li>- Lorem ipsum dolor sit.</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
