import { FC } from 'react';
import { ItemProps } from '../../types/ItemTypes';
import Modal from '../Wrappers/Modal';
import { FiX } from 'react-icons/fi';

import styles from './ItemPopup.module.scss';
import { useDispatch } from 'react-redux';
import { modalSliceActions } from '../../store/modalSlice';

const ItemPopup: FC<ItemProps> = ({ item }): JSX.Element => {
  const dispatch = useDispatch();

  const closeModalHandler = (): void => {
    dispatch(modalSliceActions.hideModalAction());
  };

  return (
    <Modal>
      <div style={{ backgroundColor: `${item?.color}` }} className={styles.itemcard}>
        <button onClick={closeModalHandler} className={styles.close}>
          <FiX />
        </button>
        <p>id: {item?.id}</p>
        <p>name: {item?.name}</p>
        <p>year: {item?.year}</p>
        <p>pantone_value: {item?.pantone_value}</p>
      </div>
    </Modal>
  );
};

export default ItemPopup;
