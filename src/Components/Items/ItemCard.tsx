import React, { FC } from 'react';
import Card from '../Wrappers/Card';
import { ItemProps } from '../../types/ItemTypes';

import styles from './ItemCard.module.scss';
import { useNavigate } from 'react-router-dom';

const ItemCard: FC<ItemProps> = ({ item }): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Card color={item?.color}>
      {item ? (
        <div className={styles?.body}>
          <p className={styles.number}>{item?.id}</p>
          <div>
            <h2
              onClick={() => navigate(`item/${item?.id}`)}
              className={styles.title}>
              {item?.name}
            </h2>
            <p className={styles.year}>{item?.year}</p>
          </div>
        </div>
      ) : (
        <p className={styles.error}>There's no such item ID</p>
      )}
    </Card>
  );
};

export default ItemCard;
