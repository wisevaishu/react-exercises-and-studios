import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setboardName] = useState('no boards yet!');

   const boards = [
      {label: "Main", value:"main"},
      {label: "Favorites", value:"fav"},
      {label: "Healthy", value:"healthy"}
   ];

   const handleChange = (event) => {
      setboardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}>
            {
               boards.map(board => (
                  <option key={board.value} value={board.value}>{board.label}</option>
               ))
            }
         </select>
         <p>Saved to {boardName}!</p>
      </div>
   );
}
