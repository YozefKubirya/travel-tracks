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