import { Middleware } from '@reduxjs/toolkit';

import { showError } from '@components/general/Toast/toastHeplers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorMiddleware: Middleware = () => next => (action: any) => {
  if (action.type.endsWith('rejected') && action.error?.name !== 'AxiosError') {
    console.error('Error occurred:', action.error);
    showError('An error occurred: ' + action.error.message);
  }
  return next(action);
};

export default errorMiddleware;
