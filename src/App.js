import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (search !== "") {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((response) => {
          setData(response.data.meals);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        .then((response) => {
          setData(response.data.meals);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [search]);

  return (
    <div>
      <div className="header">
        <h1>Meal Finder</h1>
        <h3>Find your favorite meal</h3>
        <input
          type="text"
          placeholder="Search for a meal"
          onChange={handleInputChange}
        />
      </div>
      <Card data={data} />
    </div>
  );
};

export default App;
