import { useEffect } from 'react';

const useModalEscape = (callback: () => void, isOpen: boolean): void => {
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') callback();
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, callback]);
};

export default useModalEscape;
