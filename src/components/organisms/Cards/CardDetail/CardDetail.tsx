import Image from 'next/image';
import { VFC } from 'react';
import { PriceDisplay } from 'src/components/atoms/Price/PriceDisplay';
import { useItem } from 'src/hooks/useShopItem';
import styled from 'styled-components';

export type CardDetailProps = {
  itemId: string;
};

const CardWrapper = styled.div`
  border-radius: 8px;
  display: flex;
`;

const ItemContent = styled.div``;

export const CardDetail: VFC<CardDetailProps> = ({ itemId }) => {
  const item = useItem({ itemId });
  if (item === undefined) return <div>loading</div>;
  return (
    <CardWrapper>
      <Image
        width="144"
        height="144"
        src={item.thumbnail}
        alt={`${item.name}のサムネイル画像１`}
      />
      <ItemContent>
        <h4>{item.name}</h4>
        <div>tags</div>
        <PriceDisplay price={item.price} />
      </ItemContent>
    </CardWrapper>
  );
};
