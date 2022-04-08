import React, { useEffect } from "react";

const Statewise = () => {
  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json",{mode:'cors'});
    const actualData = await res.json();
    console.log(actualData);
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <h1>INDIA 60066996DASHBOARD</h1>
    </>
  );
};
export default Statewise;
// fetch("https://api.covid19india.org/data.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
