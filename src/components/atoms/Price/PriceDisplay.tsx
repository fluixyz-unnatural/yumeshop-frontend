import { VFC } from 'react';
import {
  fontSizes,
  colors,
  spacingSizes,
  breakpoints,
} from 'src/styles/Tokens';
import { Price } from 'src/types/mock-api';
import styled from 'styled-components';

export type PriceProps = {
  price: Price;
};

const PriceSpan = styled.span<PriceProps>`
  font-size: ${fontSizes.fontSize24};
  margin: 0 ${spacingSizes.xxxs};
  @media screen and (min-width: ${breakpoints.pc}) {
    font-size: ${fontSizes.fontSize36};
    margin: 0 ${spacingSizes.xs};
  }
  color: ${(props) => (props.price.discounted ? colors.Red : colors.Black)};
`;
const YenSpan = styled.span<PriceProps>`
  color: ${(props) => (props.price.discounted ? colors.Red : colors.Black)};
`;
const DisabledSpan = styled.span`
  color: ${colors.Gray};
  margin: 0 ${spacingSizes.xxxs};
`;

const PriceWrapper = styled.div`
  font-size: ${fontSizes.fontSize14};
  @media screen and (min-width: ${breakpoints.pc}) {
    font-size: ${fontSizes.fontSize24};
  }
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
      税抜
      <PriceSpan price={price}>{price.selling_price}</PriceSpan>円
    </PriceWrapper>
  );
};
