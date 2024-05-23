import { radioValues } from "./radioValues";

import icons from "../../../images/icons.svg";

import styles from "./RadioGroupMarkup.module.scss";
import { FC } from "react";
import { FormMarkupProps } from "../../../types/FormMarkupProps";

const RadioGroupMarkup: FC<FormMarkupProps> = ({ formik }) => {
  return (
    <div>
      <h3 id="hear-about-event" className={styles.titleRadio}>
        Where did you hear about this event?
      </h3>
      <div role="group" aria-labelledby="hear-about-event" className={styles.radioGroupContainer}>
        {radioValues.map((value) => (
          <div key={value}>
            <input
              id={value}
              type="radio"
              name="whereHeard"
              value={value}
              className={styles.hiddenRadioInput}
              checked={formik.values.whereHeard === value}
              onChange={formik.handleChange}
            />

            <label htmlFor={value} key={value} className={styles.radioLabel}>
              <svg width="14" height="14">
                <use href={icons + "#icon-radio-button"}></use>
              </svg>
              {value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroupMarkup;
