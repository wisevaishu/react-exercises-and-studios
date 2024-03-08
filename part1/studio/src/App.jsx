import { useState } from 'react'
import './App.css'
import RecipeDescription from './components/Description.jsx'
import RecipeIngredients from './components/Ingredients.jsx'
import RecipePhoto from './components/Photo.jsx'

function App() {

  return (
      <div className="recipePhotoBlock">
      <RecipePhoto  />
      <div className="recipePhotoBlock">
      <RecipeDescription />
      <RecipeIngredients />
      </div>
      </div>
  )
}

export default App;