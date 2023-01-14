import { FC, MouseEvent } from 'react';
import styles from './Pagination.module.scss';

interface PaginationType {
  pages: number | string;
  currentPage: number;
  onSetPageParams: Function;
}

const Pagination: FC<PaginationType> = ({
  pages,
  onSetPageParams,
  currentPage,
}): JSX.Element => {
  const buttons = new Array(pages).fill('page');

  const handlePageParams = (event: MouseEvent<HTMLButtonElement>): void => {
    const button: HTMLButtonElement = event.currentTarget;
    onSetPageParams({ page: button.value });
  };

  return (
    <div className={styles['pagination-container']}>
      <button
        onClick={() =>
          currentPage !== 1 ? onSetPageParams({ page: currentPage - 1 }) : undefined
        }
        className={`${styles.prevbtn} ${currentPage === 1 ? styles.disabled : ''}`}>
        &larr; Prev
      </button>
      {buttons.map((_, key: number) => {
        return (
          <button
            key={key}
            onClick={handlePageParams}
            name='page'
            value={key + 1}
            className={`${styles.pagebtn} ${
              currentPage === key + 1 ? styles.active : ''
            }`}>
            {key + 1}
          </button>
        );
      })}

      <button
        onClick={() =>
          currentPage !== pages
            ? onSetPageParams({ page: currentPage + 1 })
            : undefined
        }
        className={`${styles.nextbtn} ${
          currentPage === pages ? styles.disabled : ''
        }`}>
        Next &rarr;
      </button>
    </div>
  );
};

export default Pagination;
