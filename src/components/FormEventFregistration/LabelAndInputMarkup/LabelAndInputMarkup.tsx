import { FC } from "react";

import { FormMarkupProps } from "../../../types/FormMarkupProps";

import styles from "./LabelAndInputMarkup.module.scss";

const LabelAndInputMarkup: FC<FormMarkupProps> = ({ formik }) => {
  return (
    <>
      <div className={styles.containerLabelInput}>
        <label htmlFor="fullName" className={styles.labelFormik}>
          Full Name
        </label>
        <input
          className={styles.inputFormik}
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <span className={styles.inputValidationError}>{formik.errors.fullName}</span>
        ) : null}
      </div>

      <div className={styles.containerLabelInput}>
        <label htmlFor="email" className={styles.labelFormik}>
          Email Address
        </label>
        <input
          className={styles.inputFormik}
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <span className={styles.inputValidationError}>{formik.errors.email}</span>
        ) : null}
      </div>

      <div className={styles.containerLabelInput}>
        <label htmlFor="birth" className={styles.labelFormik}>
          Date of birth
        </label>
        <input
          className={styles.inputFormik}
          id="birth"
          name="birth"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.birth}
        />
        {formik.touched.birth && formik.errors.birth ? (
          <span className={styles.inputValidationError}>{formik.errors.birth}</span>
        ) : null}
      </div>
    </>
  );
};

export default LabelAndInputMarkup;
