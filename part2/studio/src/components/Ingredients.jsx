import recipedata from "./recipe.json";

function IngredientList() {
   return (
    <div>
      <h3>Ingredients</h3>
      {
        recipedata.map( (recipeDetails) => 
          <ul>
            {
            recipeDetails.ingredients.map( (ingredient, i) => 
              <li key={i}>{ingredient}</li> 
            )
            }
          </ul>
        )
      }
    </div>
   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 