import React from "react";
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <span>Hi, I'm </span>
      <span className="home-nameSpan">Shivang </span>
      <span className="home-nameSpan">Bhandari.</span>
      <br />
      <span>
        A Frontend engineer, based out of India, currently working at
        Smallcase.
      </span>
    </div>
  );
}

export default Home;