import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {nanoid} from "nanoid";
import s from "./ContactForm.module.css"

const ContactForm = ({onAddContact}) => {
const validationSchema = Yup.object().shape({
    name:Yup.string()
    .matches(/^[A-Za-zІіЇїЄєҐґ\s]+$/, "Field has contain only letters and spaces")
    .min(3, "Field has contain at least 3 symbols")
    .max(50, "Field couldn't contain more than 50 symbols")
    .required("Field is required"),
    number: Yup.string()
    .matches(/^[0-9-]+$/, "Field has contain only digits and hyphens")
    .min(3, "Field has contain at least 3 symbols")
    .max(50, "Field couldn't contain more than 50 symbols")
    .required("Field is required"),
})

  return (
    <Formik
      initialValues={{name: "", number: ""}}
      validationSchema={validationSchema}
      onSubmit={(values, {resetForm}) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        }
        onAddContact(newContact);
        resetForm();

      }}
    >
        {() => (
      <Form className={s.form}>

        <div className={s.fields}>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component='div' style={{color: "red"}}/>

            <label htmlFor="number">Number</label>
            <Field type="text" name="number" />
            <ErrorMessage name="number" component='div' style={{color: "red"}}/>
        </div>
        <button type="submit" className={s.btn}>Add</button>
      </Form>
        )}
    </Formik>
  );
};

export default ContactForm;
