import css from './BookingForm.module.css'
import { Formik,Form,Field } from 'formik'
import DatePicker from 'react-datepicker'
import * as Yup from 'yup';
const bookingFormSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
   bookingdate:Yup.date().required("Booking date is required"),
   text:Yup.string()
 });

export const BookingForm = () => {
   const initialState = {
      name:'',
      email:'',
      bookingDate:null,
      text:''
   }
   const handleFormSubmit = (values, actions) => {
   console.log(values);
   actions.resetForm();
   }
   return (
      <>
      <div className={css.container}>
         <Formik initialValues={initialState} onSubmit={handleFormSubmit}  validationSchema={bookingFormSchema}>
         {({values, setFieldValue})=>(
            <Form className={css.booKingForm}>
            <h3>Book your campervan now</h3>
            <p>Stay connected! We are always ready to help you.</p>
            <Field type='text' name="name" placeholder='Name*' className={css.input}/>
            <Field type='email' name="email" placeholder='Email*' className={css.input}/>
               <DatePicker selected={values.bookingDate} onChange={(date) => setFieldValue(date)} placeholder='Booking Date*' className={css.input}/>
            <Field as='textarea' name="text" placeholder='Comment*' className={css.input}/>
            <button type='submit' className={css.sendButton}>Send</button>
         </Form>
         )}   
         </Formik>
         
      </div>

      </>
   )
}