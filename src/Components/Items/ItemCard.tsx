import { FC } from 'react';
import Card from '../Wrappers/Card';
import { ItemProps } from '../../types/ItemTypes';
import { useDispatch } from 'react-redux';

import styles from './ItemCard.module.scss';
import { modalSliceActions } from '../../store/modalSlice';

const ItemCard: FC<ItemProps> = ({ item }): JSX.Element => {
  const dispatch = useDispatch();

  const modalCardHandler = (): void => {
    dispatch(modalSliceActions.showModalAction({ item: item }));
  };

  return (
    <>
      <Card color={item?.color}>
        {item ? (
          <div onClick={modalCardHandler} className={styles?.body}>
            <p className={styles.number}>{item?.id}</p>
            <div>
              <h2 className={styles.title}>{item?.name}</h2>
              <p className={styles.year}>{item?.year}</p>
            </div>
          </div>
        ) : (
          <p className={styles.error}>There's no such item ID</p>
        )}
      </Card>
    </>
  );
};

export default ItemCard;
