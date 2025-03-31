import { BsGrid3X3Gap,BsGrid1X2 } from "react-icons/bs";
import { BiGridAlt } from "react-icons/bi";
import { BsWind, BsCupHot} from "react-icons/bs";
import { LiaSitemapSolid } from "react-icons/lia";
import { FaGasPump } from "react-icons/fa6";
import { FaTv, } from "react-icons/fa";
import { PiShower } from "react-icons/pi";
export const formTypeArray = [
   
   {name:"panelTruck",label:"Van", icon:BsGrid1X2},
   {name:"fullyIntegrated",label:"Fully Integrated", icon:BiGridAlt},
   {name:"alcove",label:"Alcove", icon:BsGrid3X3Gap},
   
]

const featuresTypeArray = [
   {key:"AC",label:'AC',icon:BsWind},
   {key:"bathroom",label:'Bathroom',icon:PiShower},
   {key:"kitchen",label:'Kitchen',icon:BsCupHot},
   {key:"TV",label:'TV',icon:FaTv},
   
]
      // "AC": true,
      // "bathroom": true,
      // "kitchen": true,
      // "TV": true,
      // "radio": true,
      // "refrigerator": true,
      // "microwave": false,
      // "gas": true,
      // "water": true, 