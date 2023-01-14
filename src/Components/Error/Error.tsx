import React, { FC } from 'react';
import Modal from '../Wrappers/Modal';

import styles from './Error.module.scss';

const Error: FC<{ message: string }> = ({ message }): JSX.Element => {
  return (
    <Modal>
      <div className={styles.error}>{message}</div>
    </Modal>
  );
};

export default Error;
