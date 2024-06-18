import React, { useState } from 'react';
import Header from '../Header/Header';
import ExploreMenu from '../ExploreMenu/ExploreMenu';
import Display from '../Display/Display';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <Display category={category}/>
    </div>
  );
};

export default Home;
