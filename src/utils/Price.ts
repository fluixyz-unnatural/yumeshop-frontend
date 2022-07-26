import { Price } from 'src/types/mock-api';

export const discountPercentage = (price: Price) =>
  Math.floor((price.discount_amount / price.original_price) * 100);
