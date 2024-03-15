import recipedata from "./recipe.json";

function RecipeName() {
  let rName = recipedata.map(receipedetails =><h1>{receipedetails.name}</h1>);
  return rName;
}

export default RecipeName;

//import return the name of the recipe as a level 1 header