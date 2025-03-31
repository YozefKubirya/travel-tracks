import { useSelector } from "react-redux"
import {  selectItemById } from "../../redux/campers/selectors"

import css from './Feature.module.css'



export const Features = () => {
   const camper = useSelector(selectItemById);
   
   if(!camper){
      return <p>Please wait for features....</p>
   }
   return(
      <>
      <h1>Features</h1>
      <div>
         <h2>Vehicle details</h2>        
         <p>Form {camper.form.charAt(0).toUpperCase() + camper.form.slice(1)}</p>
         <p>Length {camper.length.charAt(0).toUpperCase() + camper.length.slice(1)}</p>
         <p>Width {camper.width.charAt(0).toUpperCase() + camper.width.slice(1)}</p>
         <p>Height {camper.height.charAt(0).toUpperCase() + camper.height.slice(1)}</p>
         <p>Tank {camper.tank.charAt(0).toUpperCase() + camper.tank.slice(1)}</p>
         <p>Consumption {camper.consumption.charAt(0).toUpperCase() + camper.consumption.slice(1)}</p>
      </div>
      </>
   )
}