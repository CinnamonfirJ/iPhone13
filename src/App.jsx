import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import {
  Hero,
  Products,
  CustomersReview,
  SuperQuality,
  Subscribe,
  Footer,
} from "./sections";
import Features from "./sections/Features";
import { ProductPage } from "./pages";

const App = () => {
  return (
    <Router>
      <main className=' overflow-hidden  bg-gray-950 text-white-400'>
        {/* <div className=' overflow-hidden absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
      <div className=' overflow-hidden absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div> */}

        {/* <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div> */}
        {/* <div className=' absolute  bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_34px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]'></div> */}
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <section>
              <Hero />
            </section>

            <section id='product' className='max-container padding'>
              <Products />
            </section>
            <section id='feature' className='padding'>
              <Features />
            </section>
            <section id='workflow' className='padding'>
              <SuperQuality />
            </section>

            <section id='testimonials' className='padding'>
              <CustomersReview />
            </section>

            <section id='contact' className='padding'>
              <Subscribe />
            </section>
            <section className='padding bg-black'>
              <Footer />
            </section>
          </Route>
          <Route path='/product/:color'>
            <section id='product' className='max-container padding'>
              <ProductPage />
            </section>
            <section className='padding bg-black'>
              <Footer />
            </section>
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
