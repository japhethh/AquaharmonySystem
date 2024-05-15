// Home.js
import React, { useState } from "react";
import Header from "../../components/Header";
import ExploreMenu from "../../components/ExploreMenu";
import ProductDisplay from "../../components/ProductDisplay";
import AppDownload from "../../components/AppDownload";
import Testimonials from '../../components/Testimonials'
const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <ProductDisplay category={category} />
      <Testimonials/>
      <AppDownload />
    </div>
  );
};

export default Home;
