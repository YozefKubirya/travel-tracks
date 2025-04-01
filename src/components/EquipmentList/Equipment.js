export const Equipment = (camper) => [
{
   condition: camper.transmission === "automatic",
   text: "Automatic",
   id: "automatic",
   icon: "automatic",
},
{
   condition: camper.engine === "petrol",
   text: "Petrol",
   id: "engine",
   icon: "Petrol",
 },
{
   condition: camper.AC ,
   text:'AC',
   id:'AC',
   icon:"AC"
},
{
   condition: camper.kitchen ,
   text: 'kitchen',
   id: 'kitchen',
   icon: 'kitchen'
},
{
   condition: camper.bathroom,
   text: "Bathroom",
   id: "bathroom",
   icon: "bathroom",
 },
 {
   condition: camper.TV,
   text: "TV",
   id: "TV",
   icon: "TV",
 },
 { condition: camper.radio, text: "Radio", id: "radio", icon: "Radio" },
 { condition: camper.water, text: "Water", id: "water", icon: "Water" },
 { condition: camper.gas, text: "Gas", id: "gas", icon: "Gas" },
 {
   condition: camper.refrigerator,
   text: "Refrigerator",
   id: "refrigerator",
   icon: "Refrigerator",
 },
 {
   condition: camper.microwave,
   text: "Microwave",
   id: "microwave",
   icon: "Microwave",
 },
 {
   condition: camper.form === "panelTruck",
   text: "Van",
   id: "panelTruck",
   icon: "panelTruck",
 },
 {
   condition: camper.form === "alcove",
   text: "Alcove",
   id: "alcove",
   icon: "alcove",
 },
 {
   condition: camper.form === "fullyIntegrated",
   text: "Fully Integrated",
   id: "fullyIntegrated",
   icon: "fullyIntegrated",
 },
]


