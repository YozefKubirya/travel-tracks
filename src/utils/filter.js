export const filter = ({page, limit, location, equipment, form}) => {
   const filters = {
    page,
    limit,
   }
   if(location) {
      filters.location = location.split(",")[0];
   }
   if (equipment.AC) {
      filters.AC = equipment.AC;
    }
    if (equipment.automatic) {
      filters.transmission = "automatic";
    }
    if (equipment.manual) {
      filters.transmission = 'manual'
    }
    if (equipment.kitchen) {
      filters.kitchen = equipment.kitchen;
    }
    if (equipment.TV) {
      filters.TV = equipment.TV;
    }
    if (equipment.bathroom) {
      filters.bathroom = equipment.bathroom;
    }
    if (form) {
      filters.form = form;
    }
    return filters;
}
export const cities = [
  { id: 1, name: "Ukraine, Kyiv" },
  { id: 2, name: "Ukraine, Kharkiv" },
  { id: 3, name: "Ukraine, Lviv" },
  { id: 4, name: "Ukraine, Odesa" },
  { id: 5, name: "Ukraine, Poltava" },
  { id: 6, name: "Ukraine, Sumy" },
];