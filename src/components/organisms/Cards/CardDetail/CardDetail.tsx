import Image from 'next/image';
import { VFC } from 'react';
import { PriceDisplay } from 'src/components/atoms/Price/PriceDisplay';
import { useItem } from 'src/hooks/useShopItem';
import styled from 'styled-components';
import {
  breakpoints,
  colors,
  fontSizes,
  spacingSizes,
} from 'src/styles/Tokens';
import { Tags } from 'src/components/organisms/Tags';

export type CardDetailProps = {
  itemId: string;
};

const CardWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background: white;
  display: flex;
  position: relative;
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacingSizes.xs};
  gap: ${spacingSizes.xs};
  @media screen and (min-width: ${breakpoints.pc}) {
    margin: ${spacingSizes.sm};
    gap: ${spacingSizes.sm};
  }
`;

const ItemName = styled.h4`
  font-size: ${fontSizes.fontSize14};

  @media screen and (min-width: ${breakpoints.pc}) {
    font-size: ${fontSizes.fontSize24};
  }
  font-weight: normal;
`;

const PriceWrapper = styled.div`
  position: absolute;

  bottom: ${spacingSizes.xs};
  right: ${spacingSizes.xs};

  @media screen and (min-width: ${breakpoints.tb}) {
    bottom: ${spacingSizes.xs};
    right: ${spacingSizes.xs};
  }
  @media screen and (min-width: ${breakpoints.pc}) {
    bottom: ${spacingSizes.sm};
    right: ${spacingSizes.sm};
  } ;
`;

const ImageWrapper = styled.div`
  width: 144px;
  height: 144px;
  position: relative;
  @media screen and (min-width: ${breakpoints.pc}) {
    width: 244px;
    height: 244px;
  }
`;

const SaleLabel = styled.div`
  text-align: center;
  color: white;
  font-size: ${fontSizes.fontSize12};
  background-color: ${colors.Red};
  position: absolute;
  bottom: 0;
  width: 100%;
  opacity: 0.5;
  height: 25px;
  line-height: 25px;
`;

export const CardDetail: VFC<CardDetailProps> = ({ itemId }) => {
  const item = useItem({ itemId });
  if (item === undefined) return <div>loading</div>;

  const percentage =
    (item.price.discount_amount / item.price.original_price) * 100;

  return (
    <CardWrapper>
      <ImageWrapper>
        <Image
          layout="fill"
          src={item.thumbnail}
          alt={`${item.name}のサムネイル画像`}
        />
        {item.price.discounted && <SaleLabel>{percentage}%OFF</SaleLabel>}
      </ImageWrapper>
      <ItemContent>
        <ItemName>{item.name}</ItemName>
        <Tags tags={item.tags} />
      </ItemContent>
      <PriceWrapper>
        <PriceDisplay price={item.price} />
      </PriceWrapper>
    </CardWrapper>
  );
};
