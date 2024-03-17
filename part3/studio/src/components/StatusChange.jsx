import { useState } from 'react';

export default function StatusChange () {
   const [notes, setNotes] = useState("");
   const [receipeStatus, setreceipeStatus] = useState(false);

   const handleChange = (event) => {
      setNotes(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      setreceipeStatus(true);
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: 
               <input type="text" value={notes} onChange={handleChange} />
               
            </label>
            
            <input type="submit" />
         </form>
         
         {receipeStatus ? 
         ( <p>My Recipe Notes aren't here! {notes} </p> ) :

         ( <p>I have not tried this recipe! {notes} </p> )
         }
      </div>
   );
}
