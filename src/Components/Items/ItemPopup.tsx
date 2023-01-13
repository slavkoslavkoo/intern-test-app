import React, { FC } from 'react';
import Modal from '../Wrappers/Modal';

import styles from './ItemPopup.module.scss';
import { fetchFilteredData } from '../../Pages/ItemsList';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const ItemPopup: FC = () => {
  const params = useParams<{ id: string }>();
  const { data } = useQuery('item', async () => {
    const response = await fetchFilteredData(+params.id);
    return response;
  });

  console.log(data);
  return (
    <Modal>
      <div className={styles.itemcard}></div>
    </Modal>
  );
};

export default ItemPopup;
