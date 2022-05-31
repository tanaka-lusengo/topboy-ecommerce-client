import React from "react";
import Categories from "../../src/components/Categories";
import Footer from "../../src/components/Footer";
import Hero from "../../src/components/Hero/Hero";
import Newsletter from "../../src/components/Newsletter";
import Products from "../../src/components/Products";
import { StyledTitle } from "../components/Title";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <StyledTitle>Featured Products</StyledTitle>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
