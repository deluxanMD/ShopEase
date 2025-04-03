import {createContext, Dispatch, SetStateAction} from 'react';

export interface CheckoutScreenProviderProps {
  setAddressVisible: Dispatch<SetStateAction<boolean>>;
  setValueVisible: Dispatch<SetStateAction<boolean>>;
}

export const CheckoutScreenContext = createContext<
  CheckoutScreenProviderProps | undefined
>(undefined);

export default CheckoutScreenContext.Provider;
