import { FC, ReactNode } from 'react';

import styles from './Modal.module.scss';

const Modal: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles['modal-container']}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;
