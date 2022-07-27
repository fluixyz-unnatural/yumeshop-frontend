import { useState, useEffect } from 'react';
import { ShopItem, ShopItemsApi } from 'src/types/mock-api';

const shopItemApi = new ShopItemsApi();

export const useShopItems = (categoryId: string) => {
  const [items, setItems] = useState<ShopItem[]>();

  useEffect(() => {
    shopItemApi.getShopItems(categoryId).then((res) => setItems(res.data));
  }, [categoryId]);
  return items;
};
