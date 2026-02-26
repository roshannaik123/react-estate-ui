import React from "react";
import "./Homepage.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque illo
            voluptates, nobis atque unde nostrum, suscipit eos commodi ab ipsam
            officia! Debitis architecto explicabo perferendis aut ipsa veritatis
            cupiditate accusamus.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h1>years of experienced</h1>
            </div>
      <div className="box">
              <h1>200</h1>
              <h1>Award Gained</h1>
            </div>     
                  <div className="box">
              <h1>200</h1>
              <h1>Award Gained</h1>
            </div>     
                 </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="img" />
      </div>
    </div>
  );
};

export default HomePage;
