import { FC, PropsWithChildren, ReactElement, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

import BgOverlay from '@components/general/BgOverlay';

import useModalEscape from './hooks/useModalEscape';

import styles from './Modal.module.scss';

interface IProps {
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: 'xl' | 'md';
  isOpen?: boolean;
  header?: ReactElement;
  footer?: ReactElement;
}

const Modal: FC<PropsWithChildren<IProps>> = ({
  title,
  isOpen = true,
  size = 'md',
  onClose,
  children,
  header,
  footer,
}) => {
  console.log('Modal');

  useModalEscape(onClose, isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <BgOverlay onOverlayClick={onClose}>
          <motion.div
            className={`${styles.modalContent} ${size && styles[size]}`}
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: -50 }}
            transition={{ type: 'tween' }}
          >
            {header || (
              <div className={styles.modalHeader}>
                {title && <h4 className={styles.modalTitle}>{title}</h4>}
                <button
                  type="button"
                  className={styles.close}
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={onClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}

            <div className={styles.modalBody}>{children}</div>
            {footer && <div className={styles.modalFooter}>{footer}</div>}
          </motion.div>
        </BgOverlay>
      )}
    </AnimatePresence>
  );
};

const ModalWithPortal: FC<PropsWithChildren<IProps>> = props =>
  createPortal(<Modal {...props} />, document.body);

export default ModalWithPortal;
