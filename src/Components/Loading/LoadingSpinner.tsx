import React, { FC } from 'react';
import Modal from '../Wrappers/Modal';
import styles from './LoadingSpinner.module.scss';

const LoadingSpinner: FC = (): JSX.Element => {
  return (
    <Modal>
      <div className={styles.spinner}></div>
    </Modal>
  );
};

export default LoadingSpinner;
