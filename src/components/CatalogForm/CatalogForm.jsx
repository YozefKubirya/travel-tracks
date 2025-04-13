import { Formik, Field, Form } from 'formik';
import { setForm, setLocation,toggleFilter} from "../../redux/filters/slice.js";
import { fetchCampers } from "../../redux/campers/operations.js";
import { useDispatch, useSelector } from "react-redux";
import { selectItemsPerPage } from "../../redux/campers/selectors.js";
import { selectFilters, selectForm, selectLocation } from "../../redux/filters/selector.js";
import { useId, useState } from "react";
import { formTypeArray } from "../../utils/filters/formTypeFilter.js";
import { BsWind, BsCupHot, BsMap } from "react-icons/bs";
import { LiaSitemapSolid } from "react-icons/lia";
import { FaTv } from "react-icons/fa";
import { PiShower } from "react-icons/pi";
import { FaGasPump } from "react-icons/fa6";
import { cities } from '../../utils/filter.js';
import css from './CatalogForm.module.css';

const icons = {
  AC: BsWind,
  automatic: LiaSitemapSolid,
  kitchen: BsCupHot,
  TV: FaTv,
  bathroom: PiShower,
  gas: FaGasPump
};

export const CatalogForm = () => {
  const dispatch = useDispatch();
  const limit = useSelector(selectItemsPerPage);
  const nameId = useId();
  const equipment = useSelector(selectFilters);
  const options = Object.keys(equipment);
  const location = useSelector(selectLocation);
  const form = useSelector(selectForm)
  const selectedEquipment = options.filter(key => equipment[key]);
  const [isDropDownOpen, setIsDropDown] = useState(false);
  const handleSubmit = (values, actions) => {
    const formattedEquipment = {};
    options.forEach((item) => {
      formattedEquipment[item] = values.equipment.includes(item);
    });
    const filters = {
    ...values,
    equipment: formattedEquipment,
    };
    dispatch(setLocation(filters.location));
    Object.entries(filters.equipment).forEach(([name, checked]) => {
      dispatch(toggleFilter({ name, checked }));
    })
    dispatch(setForm(filters.form));
    dispatch(fetchCampers({page:1,limit,...filters}))
    console.log(filters);   
    actions.resetForm();
  }
  return (
    <Formik
      initialValues={{
        location,
        equipment: selectedEquipment,
        form
      }}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => {
        const filteredLocations = cities
          .map(city => city.name)
          .filter(name => name.toLowerCase().includes(values.location.toLowerCase()));

        const handleDropDown = () => {
          setIsDropDown(prev => !prev);
        };

        const handleCity = (cityName) => {
          setFieldValue('location', cityName);
          setIsDropDown(false);
        };

        return (
          <div>
            <Form className={css.filterForm}>
              <label htmlFor={nameId} className={css.formLabels}>Location</label>
              <div className={css.locationInputContainer}>
                <BsMap className={css.locationIcon} onClick={handleDropDown} />
                <Field
                  type='text'
                  name='location'
                  id={nameId}
                  className={css.locationInput}
                  placeholder='City'
                  onFocus={handleDropDown}
                />
                {isDropDownOpen && (
                  <ul className={css.dropdown}>
                    {filteredLocations.map((locationName, index) => (
                      <li
                        key={index}
                        className={css.dropdownItem}
                        onClick={() => handleCity(locationName)}
                      >
                        {locationName}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <p className={css.formText}>Filters</p>
              <h2 className={css.formTitle}>Vehicle equipment</h2>

              <div className={css.equipmentGrid}>
                {options.map((item) => {
                  const Icon = icons[item];
                  return (
                    <label
                      key={item}
                      htmlFor={`${nameId}-${item}`}
                      className={css.equipmentLabel}
                    >
                      <Field
                        type='checkbox'
                        name='equipment'
                        value={item}
                        id={`${nameId}-${item}`}
                        className={css.typeBox}
                      />
                      <div className={css.equipmentButton}>
                        <Icon size={32} />
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </div>
                    </label>
                  );
                })}
              </div>

              <h2 className={css.formTitle}>Vehicle type</h2>
              <div className={css.equipmentGrid}>
                {formTypeArray.map(({ name, label, icon }) => {
                  const Icon = icon;
                  return (
                    <label
                      key={name}
                      htmlFor={`${nameId}-${name}`}
                      className={css.equipmentLabel}
                    >
                      <Field
                        type='radio'
                        name='form'
                        value={name}
                        id={`${nameId}-${name}`}
                        className={css.typeBox}
                      />
                      <div className={css.equipmentButton}>
                        <Icon size={32} />
                        {label}
                      </div>
                    </label>
                  );
                })}
              </div>

              <button type="submit" className={css.searchBtn}>
                Search
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
