import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginFormSchema} from './LoginFormSchema';

export const useLoginForm = () => {
  return useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: loginFormSchema.cast({}),
  });
};
