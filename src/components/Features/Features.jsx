import { useSelector } from "react-redux"
import {  selectItemById } from "../../redux/campers/selectors"

import css from './Feature.module.css'
import { EquipmentList } from "../EquipmentList/EquipmentList.jsx"


export const Features = () => {
   const camper = useSelector(selectItemById);

   
   
   if(!camper){
      return <p>Please wait for features....</p>
   }
   return(
      <>
      
      <div className={css.featureContainer}>
         <div className={css.featureListCont}>
         <EquipmentList camper={camper}/>
         </div>
         
         <h3 className={css.featureTitle}>Vehicle details</h3>
         <ul className={css.vehicleList}>
            <li className={css.vehicleItem}>
               <span>Form</span>
               <span>{camper.form ? camper.form.charAt(0).toUpperCase() + camper.form.slice(1) : null}</span>
            </li>
            <li className={css.vehicleItem}>
               <span>Length</span>
               <span>{camper.length ? camper.length : null}</span>
            </li>
            <li className={css.vehicleItem}>
               <span>Width</span>
               <span>{camper.width ? camper.width : null}</span>
            </li>
            <li className={css.vehicleItem}>
               <span>Height</span>
               <span>{camper.height ? camper.height : null}</span>
            </li>
            <li className={css.vehicleItem}>
               <span>Tank</span>
               <span>{camper.tank ? camper.tank : null}</span>
            </li>
            <li className={css.vehicleItem}>
               <span>Consumption</span>
               <span>{camper.consumption ? camper.consumption : null}</span>
            </li>
        
         </ul>      
         
      </div>
      </>
   )
}