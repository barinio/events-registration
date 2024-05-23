import * as Yup from "yup";

const emailRegExp =
  // eslint-disable-next-line no-control-regex
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
const birthRegExp = /\d{1,2}\/\d{1,2}\/\d{2,4}/;

export const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Participant's full name must contain at least 2 characters")
    .max(64, "Participant's full name must be at most 64 characters")
    .required("Participant's full name is required"),
  email: Yup.string()
    .required("Email address is required")
    .matches(emailRegExp, "Invalid email address (example: test@exam.ple)"),
  birth: Yup.string()
    .required("Date of birth is required")
    .matches(birthRegExp, "dd/mm/yyyy or dd/mm/yy")
});
