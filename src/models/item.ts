export const ITEM_TYPE = {
  FOLDER: 1,
  FILE: 2
} as const;
export type ITEM_TYPE = typeof ITEM_TYPE[keyof typeof ITEM_TYPE]; // 1 | 2

export interface Item {
  itemType: ITEM_TYPE;
  id: string;
  name: string;
}

// Item which item id is not determined yet
export interface ItemForCreation {
  itemType: ITEM_TYPE;
  name: string;
}
