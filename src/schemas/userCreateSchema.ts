import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  fullName: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).max(32).required("Password is required"),
  contactNo: yup.string().min(6).max(32).required("Contact No is required"),
});
