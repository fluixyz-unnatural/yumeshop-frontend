import { VFC } from 'react';
import { Price } from 'src/types/mock-api';
import styled from 'styled-components';

export type PriceProps = {
  price: Price;
};

const PriceSpan = styled.span<PriceProps>`
  font-size: 24px;
  margin: 0 4px;
  color: ${(props) => (props.price.discounted ? 'red' : 'black')};
`;
const YenSpan = styled.span<PriceProps>`
  color: ${(props) => (props.price.discounted ? 'red' : 'black')};
`;
const DisabledSpan = styled.span`
  color: gray;
  margin: 0 4px;
`;

const PriceWrapper = styled.div`
  font-size: 14px;
`;

export const PriceDisplay: VFC<PriceProps> = ({ price }) => {
  if (price.discounted)
    return (
      <PriceWrapper>
        税抜
        <DisabledSpan>{price.original_price}→</DisabledSpan>
        <PriceSpan price={price}>{price.selling_price}</PriceSpan>
        <YenSpan price={price}>円</YenSpan>
      </PriceWrapper>
    );
  return (
    <PriceWrapper>
      <PriceSpan price={price}>{price.selling_price}</PriceSpan>円 円
    </PriceWrapper>
  );
};
