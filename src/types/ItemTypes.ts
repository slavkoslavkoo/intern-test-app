export type ItemType = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

export interface ItemProps {
  item: ItemType;
}
