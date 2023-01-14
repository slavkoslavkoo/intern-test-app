import { ChangeEvent, FC, useEffect, useState } from 'react';
import { fetchData, fetchFilteredData } from '../utils/apiServices';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { ItemType } from '../types/ItemTypes';
import { useSelector } from 'react-redux';

import ItemCard from '../Components/Items/ItemCard';
import ItemPopup from '../Components/Items/ItemPopup';
import Pagination from '../Components/Pagination/Pagination';

import styles from './ItemsList.module.scss';
import Error from '../Components/Error/Error';
import LoadingSpinner from '../Components/Loading/LoadingSpinner';

const ItemsList: FC = (): JSX.Element => {
  const [itemId, setItemId] = useState<number>(0);
  const [pageParams, setPageParams] = useSearchParams({});
  const [errorMessage, setErrorMessage] = useState<string>('');
  const showModal = useSelector((state: any) => state.modalSlice.showModal);
  const itemState = useSelector((state: any) => state.modalSlice.item);
  const currentPage = Number(pageParams.get('page'));

  const {
    isLoading,
    refetch,
    data: items,
  } = useQuery({
    queryKey: 'items',
    queryFn: async () => {
      const response = itemId
        ? await fetchFilteredData(itemId)
        : await fetchData(currentPage);
      return response;
    },
    onError: () =>
      setErrorMessage(
        'Connection failed! Please stay calm and contact your developer! '
      ),
  });

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setItemId(+e.target.value);
  };

  useEffect(() => {
    refetch();
  }, [itemId, currentPage, refetch]);

  useEffect(() => {
    if (!pageParams.get('page')) setPageParams({ page: '1' });
  }, [pageParams, setPageParams]);

  const itemsElement =
    items?.data?.length > 1 ? (
      items?.data.map((item: ItemType, key: number) => (
        <li className={styles.item} key={key}>
          <ItemCard item={item} />
        </li>
      ))
    ) : (
      <ItemCard item={items?.data} />
    );

  console.log(isLoading);

  if (errorMessage) {
    return <Error message={errorMessage} />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className={styles.items}>
      <input
        type='number'
        placeholder='Input item ID to filter'
        className={styles.input}
        onChange={inputHandler}
      />
      <ul className={styles.itemlist}>{!isLoading && itemsElement}</ul>
      {showModal ? <ItemPopup item={itemState} /> : null}
      <Pagination
        onSetPageParams={setPageParams}
        currentPage={currentPage}
        pages={items?.total_pages}
      />
    </section>
  );
};

export default ItemsList;
