import { useState, useEffect } from 'react';
import { ShopItemDetail, ShopItemsApi } from 'src/types/mock-api';

const shopItemApi = new ShopItemsApi();

export const useItem = ({ itemId }: { itemId: string }) => {
  const [item, setItem] = useState<ShopItemDetail>();

  useEffect(() => {
    shopItemApi.getShopItem(itemId).then((res) => setItem(res.data));
  }, [itemId]);
  return item;
};
