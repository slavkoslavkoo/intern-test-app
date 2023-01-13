import { ChangeEvent, FC, useEffect, useState } from 'react';
import ItemCard from '../Components/Items/ItemCard';
import { useQuery } from 'react-query';
import styles from './ItemsList.module.scss';
import { ItemType } from '../types/ItemTypes';

const fetchData = async () => {
  return fetch('https://reqres.in/api/products').then(res => res.json());
};

export const fetchFilteredData = async (id?: number) => {
  return fetch(`https://reqres.in/api/products/${id}`).then(res => res.json());
};

const ItemsList: FC = () => {
  const [itemId, setItemId] = useState<number>(0);
  const {
    isLoading,
    refetch,
    data: items,
  } = useQuery('items', async () => {
    const response = itemId ? await fetchFilteredData(itemId) : await fetchData();
    return response;
  });

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setItemId(+e.target.value);
  };

  useEffect(() => {
    refetch();
  }, [itemId]);

  const itemsElement =
    items?.data?.length > 1 ? (
      items?.data.map((item: ItemType, key: number) => (
        <ItemCard key={key} item={item} />
      ))
    ) : (
      <ItemCard item={items?.data} />
    );

  return (
    <section className={styles.items}>
      <input
        type='number'
        placeholder='Input item ID to filter'
        className={styles.input}
        onChange={inputHandler}
      />
      {!isLoading && itemsElement}
    </section>
  );
};

export default ItemsList;
