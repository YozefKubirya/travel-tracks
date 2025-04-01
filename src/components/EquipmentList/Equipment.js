import { BsWind, BsCupHot,  } from "react-icons/bs";
import { LiaSitemapSolid } from "react-icons/lia";
import { FaGasPump } from "react-icons/fa6";

import { FaTv, } from "react-icons/fa";
import { PiShower } from "react-icons/pi";
import { BsGrid3X3Gap,BsGrid1X2 } from "react-icons/bs";
import { BiGridAlt } from "react-icons/bi";
import { MdOutlineRadio } from "react-icons/md";
import { IoWater } from "react-icons/io5";
import { GiGasStove } from "react-icons/gi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { MdOutlineMicrowave } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";
export const Equipment = (camper) => [
{
   condition: camper.transmission === "automatic",
   text: "Automatic",
   id: "automatic",
   icon: LiaSitemapSolid,
},
{
  condition: camper.transmission === "manual",
  text: "Manual",
  id: "manual",
  icon:  TbManualGearbox,
},
{
   condition: camper.engine === "petrol",
   text: "Petrol",
   id: "engine",
   icon: FaGasPump,
 },
{
   condition: camper.AC ,
   text:'AC',
   id:'AC',
   icon:BsWind
},
{
   condition: camper.kitchen ,
   text: 'Kitchen',
   id: 'kitchen',
   icon: BsCupHot
},
{
   condition: camper.bathroom,
   text: "Bathroom",
   id: "bathroom",
   icon: PiShower,
 },
 {
   condition: camper.TV,
   text: "TV",
   id: "TV",
   icon: FaTv,
 },
 { condition: camper.radio, text: "Radio", id: "radio", icon: MdOutlineRadio },
 { condition: camper.water, text: "Water", id: "water", icon: IoWater },
 { condition: camper.gas, text: "Gas", id: "gas", icon: GiGasStove },
 {
   condition: camper.refrigerator,
   text: "Refrigerator",
   id: "refrigerator",
   icon: CgSmartHomeRefrigerator,
 },
 {
   condition: camper.microwave,
   text: "Microwave",
   id: "microwave",
   icon: MdOutlineMicrowave,
 },
 {
   condition: camper.form === "panelTruck",
   text: "Van",
   id: "panelTruck",
   icon: BsGrid1X2,
 },
 {
   condition: camper.form === "alcove",
   text: "Alcove",
   id: "alcove",
   icon: BsGrid3X3Gap,
 },
 {
   condition: camper.form === "fullyIntegrated",
   text: "Fully Integrated",
   id: "fullyIntegrated",
   icon: BiGridAlt,
 },
]


