import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

const listItem = oceans.map(ocean =>
   <div key={ocean.id} 
    className={`${ocean.fishCheck==='true' ? "isAFish" : "profile"}`}>
      <h1>{ocean.name}</h1>
      <h1>Facts</h1>
      <ul>
         <li>{ocean.fact1}</li>
         <li>{ocean.fact2}</li>
         <li>{ocean.fact3}</li>
      </ul>
      <img src={ocean.image} alt={ocean.name} className='img'></img>
      <Button />
   </div>
);

function Profile()
{
   return(
      <>
         {/* <h3>Coming Soon! Profiles of Ocean creatures</h3> */}
         <ul>
            {listItem}
         </ul>
     
      </>  
   );
}

export default Profile;