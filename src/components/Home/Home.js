import React from "react";
import './Home.scss';

import { ABTest, Variant } from "../ABTest";

const Home = () => {
  return (
    <div className="home">
      <span>Hi, I'm </span>
      <span className="home-nameSpan">Shivang </span>
      <span className="home-nameSpan">Bhandari.</span>
      <br />
      <span>
        I'm a Frontend engineer, based out of Mumbai, currently working at
        Haptik.
      </span>
    </div>
  );
}

export default Home;