import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
  username: yup.string().required().default('').nullable(),
  password: yup.string().required().default('').nullable(),
});
