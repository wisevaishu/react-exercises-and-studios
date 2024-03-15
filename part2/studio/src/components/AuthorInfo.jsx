import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  let authorName = recipedata.map(receipedetails =><h1>{receipedetails.author}</h1>);
  let authorImage = recipedata.map(receipedetails =><img src={receipedetails.authorImage} 
                    alt={receipedetails.authorName} className="authorImage"></img>);
   let authorURL = recipedata.map(receipe => (
    <a key={receipe.name} href={receipe.website}>Details</a>));
   return(
    <div>
      {authorImage}
      {authorName}
      {authorURL} 
    </div>
    );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 