import React from "react";
import Categories from "../../src/components/Categories";
import Footer from "../../src/components/Footer";
import Hero from "../../src/components/Hero/Hero";
import Newsletter from "../../src/components/Newsletter";
import Products from "../../src/components/Products";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
