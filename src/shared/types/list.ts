export type TItemProp<T> = {
  item: T;
};

export type TAnyKeyObject = {
  [key: string]: unknown;
};

export type TObjectWithItemProp<T> = TAnyKeyObject & TItemProp<T>;
