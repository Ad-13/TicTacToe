import { toast, Zoom } from 'react-toastify';

export const showError = (message = 'Error Occured') =>
  toast.error(message, {
    toastId: 'error',
    position: 'top-center',
    closeOnClick: true,
    transition: Zoom,
    style: { borderRadius: '3px', backgroundColor: '#bd362f', color: '#FFFFFF' },
  });

export const showWarning = (message = '') =>
  toast.warning(message, {
    position: 'top-center',
    closeOnClick: true,
    transition: Zoom,
    style: { borderRadius: '3px', backgroundColor: '#f89406' },
  });

export const showSuccess = (message = '') =>
  toast.success(message, {
    position: 'top-center',
    closeOnClick: true,
    transition: Zoom,
    style: { borderRadius: '3px' },
  });
