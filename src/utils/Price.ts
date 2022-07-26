import { Price } from 'src/types/mock-api';

export const discountPercentage = (price: Price) => {
  if (price.original_price === 0) return 0;
  return Math.floor((price.discount_amount / price.original_price) * 100);
};
