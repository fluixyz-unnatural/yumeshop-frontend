import { VFC } from 'react';
import { Price } from 'src/types/mock-api';

export type PriceProps = {
  price: Price;
};

export const PriceDisplay: VFC<PriceProps> = ({ price }) => {
  if (price.discounted)
    return (
      <div>
        <span>税抜 {price.original_price}</span>
        <span>{price.selling_price}円</span>
      </div>
    );
  return (
    <div>
      <span>{price.selling_price}円</span>
    </div>
  );
};
