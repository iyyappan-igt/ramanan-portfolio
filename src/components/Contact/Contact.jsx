'use client';
import { useState } from 'react';
import styles from './Contact.module.css';
import { Phone } from 'lucide-react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup"
import { toast } from 'react-toastify';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone must be 10 digits')
    .required('Phone is required'),
  areaOfInterest: Yup.string().required('Please select an area of interest'),
  financialGoals: Yup.string(),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    areaOfInterest: '',
    financialGoals: '',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log(values)
    try {
      setLoading(true);
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();
      const newFormData = {
        Name: values?.name,
        MobileNumber: values.phone,
        Email: values.email,
        AreaOfInterest: values.areaOfInterest,
        FinancialGoal: values.financialGoals,
        IP_Address: ipData.ip
      }
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxS6WUslow7uelKR4n1M4-dXrF9TCMC8yDV5cgueU9USK4wnqoEiEBDRHuoxmVDw3HoMQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(newFormData).toString(),
        }
      );
      resetForm();
      toast.success("Thanks! Your call is scheduled — we'll follow up soon.");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Start Your Financial <br /> Transformation Today
          </h2>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            No pressure. Just a conversation to explore your goals.
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={ContactSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <div className={styles.formGrid}>
                {/* Full Name */}
                <div className={styles.inputWrapper}>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={styles.error}
                  />
                </div>

                {/* Email */}
                <div className={styles.inputWrapper}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={styles.error}
                  />
                </div>

                {/* Phone */}
                <div className={styles.inputWrapper}>
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className={styles.error}
                  />
                </div>

                {/* Area of Interest */}
                <div className={styles.inputWrapper}>
                  <Field as="select" name="areaOfInterest" className={styles.select}>
                    <option value="">Area of Interest</option>
                    <option value="retirement-planning">Retirement Planning</option>
                    <option value="investment-advisory">Investment Advisory</option>
                    <option value="tax-planning">Tax Planning</option>
                    <option value="insurance-planning">Insurance Planning</option>
                    <option value="wealth-management">Wealth Management</option>
                    <option value="financial-planning">Financial Planning</option>
                  </Field>
                  <ErrorMessage
                    name="areaOfInterest"
                    component="div"
                    className={styles.error}
                  />
                </div>

                {/* Financial Goals */}
                <div className={`${styles.inputWrapper} ${styles.fullWidth}`}>
                  <Field
                    as="textarea"
                    name="financialGoals"
                    placeholder="Tell us about your financial goals (Optional)"
                    className={styles.textarea}
                    rows="4"
                  />
                  <ErrorMessage
                    name="financialGoals"
                    component="div"
                    className={styles.error}
                  />
                </div>
              </div>

              <div className={styles.buttonWrapper}>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  <Phone size={20} />
                  {isSubmitting ? 'Submitting...' : 'Schedule Free Call'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
