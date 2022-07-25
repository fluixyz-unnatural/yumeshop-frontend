import Image from 'next/image';
import { VFC } from 'react';
import { PriceDisplay } from 'src/components/atoms/Price/PriceDisplay';
import { useItem } from 'src/hooks/useShopItem';
import styled from 'styled-components';
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
  margin: 8px;
  gap: 8px;
`;

const ItemName = styled.h4`
  font-size: 1rem;
  font-weight: normal;
`;

const PriceWrapper = styled.div`
  position: absolute;
  bottom: 12px;
  right: 8px;
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
