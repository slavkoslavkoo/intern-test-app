import { FC, ReactNode } from 'react';
import styles from './Card.module.scss';

const Card: FC<{ children: ReactNode; color?: string }> = ({
  children,
  color,
}): JSX.Element => {
  return (
    <div style={{ backgroundColor: `${color}` }} className={styles.card}>
      {children}
    </div>
  );
};

export default Card;
