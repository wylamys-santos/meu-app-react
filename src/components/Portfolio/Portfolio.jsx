import React from "react";

import "./Portfolio.css";
import portfolio from "./Portfolio.json";

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";

function Portfolio() {

   return (

      <>
         {portfolio.map(
            (item, index) =>
               <ItemPortfolio
                  key={index}
                  link={item.link}
                  image={item.image + (index + 1)}
                  title={item.title + (index + 1)}
               ></ItemPortfolio>


         )}
      </>

   )

}

export default Portfolio;
