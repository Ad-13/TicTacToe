import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@app/store';

export const AppProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
