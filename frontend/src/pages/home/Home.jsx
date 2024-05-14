// Home.js
import React, { useState } from "react";
import Header from "../../components/Header";
import ExploreMenu from "../../components/ExploreMenu";
import ProductDisplay from "../../components/ProductDisplay";
import AppDownload from "../../components/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <ProductDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
