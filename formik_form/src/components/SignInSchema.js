import * as Yup from "Yup"
const phoneRegExp = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{10,10}$/

export const SignInSchema = Yup.object().shape({
    name:Yup.string().required("*this fils is required"),
    email:Yup.string().email().required("*this fils is required"),
    age:Yup.number().positive().integer().required("*this fils is required").min(2).max(3),
    phone:Yup.string().matches(phoneRegExp,"phone number is not valid remove space ").required("*this fils is required").min(10).max(10),
    password:Yup.string().min(5).max(10).required("*this fils is required"),
    conform_password:Yup.string().oneOf([Yup.ref('password'),null],'password must match').required("*this fils is required")
})