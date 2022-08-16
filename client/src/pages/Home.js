import React from "react";


import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h1> Welcome To </h1>  <h2>Dante's JDM List</h2>
        <div className="prompt">
          
        
          
        </div>
      </div>
      <div className="skills">
        <h1> About JDM</h1>
        <ol className="list">
          <li className="item">
            <h2> What is JDM ? </h2>
            <span>
            Japanese developed Motor (JDM) refers to Japan's home market for vehicles and vehicle parts.

There is a common Misconception that any Japanese branded car is JDM however this is not true. Only a vehicle made to be sold in Japan is considered JDM.
            </span>
          </li>
          <li className="item">
            <h2>What is special about JDM cars?</h2>
            <span>
            It's just that the Japanese tend to hold themselves to a higher standard so their cars, the ones sold only in Japan, tend to be better. Also, the sheer power of a JDM car, and its modularity that allows you to build upon it, are unmatchable.
            </span>
          </li>
          <li className="item">
            <h2>JDM List</h2>
            <span>This Site offers descriptions of what is considered the best and most popular JDM cars, keep in note the descriptions on the cars may change over time. 
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
