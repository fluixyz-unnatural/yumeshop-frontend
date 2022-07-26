import Image from 'next/image';
import { VFC } from 'react';
import { PriceDisplay } from 'src/components/atoms/Price/PriceDisplay';
import { useItem } from 'src/hooks/useShopItem';
import styled from 'styled-components';
import { breakpoints, fontSizes, spacingSizes } from 'src/styles/Tokens';
import { Tags } from '../../Tags';

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

export const CardDetail: VFC<CardDetailProps> = ({ itemId }) => {
  const item = useItem({ itemId });
  if (item === undefined) return <div>loading</div>;
  return (
    <CardWrapper>
      <Image
        width="144"
        height="144"
        src={item.thumbnail}
        alt={`${item.name}のサムネイル画像`}
      />
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
