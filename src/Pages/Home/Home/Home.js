import React from "react";
import Hero from "../../Hero/Hero";
import AdvertisedItems from "../AdvertisedItems/AdvertisedItems";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Secure from "../Secure/Secure";
import Testimonial from "../Testimonial/Testimonial";
import Testimonila from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Categories></Categories>
      <AdvertisedItems></AdvertisedItems>
      <Secure></Secure>
      <Testimonial></Testimonial>
      <Hero></Hero>
    </div>
  );
};

export default Home;
