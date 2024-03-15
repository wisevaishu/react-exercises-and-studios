import recipedata from "./recipe.json";

function RecipeImage() {
  let rImg = recipedata.map(receipedetails =>
   <img alt={receipedetails.name} src={receipedetails.recipeImage} 
   className="recipeImage"></img>);
  return (
    <div>
      {rImg}
    </div>
  );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 