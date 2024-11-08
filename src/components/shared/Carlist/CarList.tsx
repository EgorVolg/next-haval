
import React from "react";

async function getFetchData() {
  const response = await fetch(
    "https://test2.maximum-haval.ru/public/test-task/v1/brand/haval"
  );

  const rejson = response.json();
  return console.log(rejson);
}

export const CarList = async () => {
 
  return (
    <div>
      <div>hello world</div>
     
      
    </div>
  );
};
