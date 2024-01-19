import React, { useState } from "react";

const Card = ({ data }) => {
  const [isFullTextShown, setIsFullTextShown] = useState(false);

  const handleTextClick = () => {
    setIsFullTextShown(!isFullTextShown);
  };

  return (
    <div className="meals">
      {data.map((meal) => (
        <div className="meal" key={meal.idMeal}>
          <div className="header-info" data-mealid={meal.idMeal}>
            <h2>{meal.strMeal}</h2>
            <p className="origin">{meal.strArea}</p>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
          <div className="meal-info">
            <p className="category">- {meal.strCategory} -</p>
            <p className="description" onClick={handleTextClick}>
              {isFullTextShown
                ? meal.strInstructions
                : meal.strInstructions.substring(0, 200)}
              ...
            </p>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default Card;
