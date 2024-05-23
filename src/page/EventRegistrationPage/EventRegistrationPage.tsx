import { useFormik } from "formik";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import { Participants } from "../../types/Participants";
import { validationSchema } from "./utils/validationSchema";
import { initialValues } from "./utils/initialValues";

import LabelAndInputMarkup from "../../components/FormEventFregistration/LabelAndInputMarkup/LabelAndInputMarkup";
import RadioGroupMarkup from "../../components/FormEventFregistration/RadioGroupMarkup/RadioGroupMarkup";
import { addNewParticipant } from "../../services/api";
import Loader from "../../components/Loader/Loader";

import styles from "./EventRegistrationPage.module.scss";

const EventRegistrationPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { eventId } = useParams();

  const formik = useFormik<Participants>({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const registrationTime = new Date().toLocaleDateString("en-GB");
        await addNewParticipant({ ...values, eventId, registrationTime });
        toast.success(`Participant ${values.fullName} successfully added`);
        formik.resetForm();
      } catch (error) {
        error instanceof AxiosError && toast.error(error.response?.data.message);
      } finally {
        setIsLoading(false);
      }
    }
  });

  return (
    <>
      <Link to="/" className={styles.goBackLink}>
        ←Go Back
      </Link>

      <h2 className={styles.titlePage}>Event registration</h2>

      <form onSubmit={formik.handleSubmit} className={styles.formFormik}>
        <div className={styles.formWrapper}>
          <LabelAndInputMarkup formik={formik} />
          <RadioGroupMarkup formik={formik} />
        </div>

        <button type="submit" className={styles.btnSubmit}>
          Submit
        </button>
      </form>

      {isLoading && <Loader />}
    </>
  );
};

export default EventRegistrationPage;
