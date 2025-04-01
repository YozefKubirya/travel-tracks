import { Equipment } from "./Equipment.js";
import { EquipmentItem } from "../EquipmentItem/EquipmentItem.jsx";
import css from './EquipmentList.module.css'
export const EquipmentList = ({camper}) => {
   const specL = Equipment(camper);
   return (<>
   <ul className={css.specList}>
      {specL.filter((item)=>item.condition).map((item)=>
      <li key={item.id} className={css.specItem}>
         <EquipmentItem
              text={item.text}
              icon={item.icon}
            />
      </li>)}
   </ul>
   </>)
}