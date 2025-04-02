import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
  username: yup
    .string()
    .required('Please enter your username')
    .default('')
    .nullable(),
  password: yup
    .string()
    .required('Please enter your password')
    .default('')
    .nullable(),
});
