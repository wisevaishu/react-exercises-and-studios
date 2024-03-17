import { useState } from 'react';
import "../App.css";

const RecipeAuthor = () => {
   let authorLink = "https://www.steffisrecipes.com/";
   let authorPhoto = "https://2.bp.blogspot.com/-gtzqeiUbi6g/V3WpkFGB0UI/AAAAAAAAAFE/1uDWe3pL1gsqU-FmZDNboPnW3l3zjkEoQCKgB/s320/IMG-20151226-WA0001.jpg";
   let authorName = "Steffi";

   return (
      <div>
         <img src={authorPhoto} alt = "" 
         style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Visit Author Website</a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Onion", "Tomatos", "Vegetables", "Spices", "Salt"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://3.bp.blogspot.com/-0H3wTlR2Yo0/V4--4NrY6GI/AAAAAAAAAno/x9gYRALXUIQyxYP8jOH2SgMc33UZ3cOKACLcB/s1600/veg%2BBiryani.JPG" alt="" 
      className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
