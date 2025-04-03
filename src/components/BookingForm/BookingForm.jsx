import css from './BookingForm.module.css'
import { Formik,Form,Field } from 'formik'
import DatePicker from 'react-datepicker'
import * as Yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";


export const BookingForm = () => {
   const initialValues = {
      name:'',
      email:'',
      bookingDate:null,
      text:''
   }
   const bookingFormSchema = Yup.object({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      bookingDate:Yup.date().required("Booking date is required"),
      text:Yup.string()
    });
   const handleFormSubmit = (values, actions) => {
   console.log(values);
   actions.resetForm();
   }
   return (
      <>
      <div className={css.container}>
         
         <Formik initialValues={initialValues} onSubmit={handleFormSubmit}  validationSchema={bookingFormSchema}>
         {({values, setFieldValue})=>(
            <Form className={css.booKingForm}>
            <h3 className={css.title}>Book your campervan now</h3>
            <p className={css.text}>Stay connected! We are always ready to help you.</p>
            <Field name="name" type='text'  placeholder='Name*' className={css.input}/>
            <Field type='email' name="email" placeholder='Email*' className={css.input}/>
               <DatePicker selected={values.bookingDate} onChange={(date) => setFieldValue("bookingDate",date)} placeholderText='Booking Date*' className={css.input}/>
            <Field as='textarea' name="text" placeholder='Comment*' className={css.input}/>
            <button type='submit' className={css.sendButton}>Send</button>
         </Form>
         )}   
         </Formik>
         
      </div>

      </>
   )
}