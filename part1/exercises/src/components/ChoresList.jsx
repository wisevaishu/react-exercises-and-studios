import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div style={{backgroundColor: 'lightblue'}}>
         <p className={classes.choresHeading}>Today's Chores</p>
         <ul>
            <li className={classes.choresText}>Empty Diswasher</li>
            <li className={classes.choresText}>Complete prep work</li>
            <li className={classes.choresText}>Buy Groceries</li>
         </ul>
      </div>   
   );
}