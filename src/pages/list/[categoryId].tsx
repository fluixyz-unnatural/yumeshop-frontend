import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Headline } from 'src/components/atoms/Headline';
import { CardDetail } from 'src/components/organisms/Cards/CardDetail';
import { Layout } from 'src/components/organisms/Layout/Layout';
import { useCategory } from 'src/hooks/useCategory';
import { useShopItems } from 'src/hooks/useShopItems';
import {
  breakpoints,
  colors,
  fontSizes,
  spacingSizes,
} from 'src/styles/Tokens';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${colors.YumeWhiteGreen};
  height: fit-content;
  min-height: 100%;
  padding: ${spacingSizes.sm};

  @media screen and (min-width: ${breakpoints.tb}) {
    padding: ${spacingSizes.md};
  }
  @media screen and (min-width: ${breakpoints.pc}) {
    padding: ${spacingSizes.lg};
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${spacingSizes.xs};

  @media screen and (min-width: ${breakpoints.pc}) {
    gap: ${spacingSizes.sm};
  }
`;

const HeadWrapper = styled.div`
  margin-bottom: ${spacingSizes.sm};
  font-size: ${fontSizes.fontSize24};
  @media screen and (min-width: ${breakpoints.pc}) {
    font-size: ${fontSizes.fontSize32};
  }
  & h1 {
    font-size: 1em;
  }
`;

const List: NextPage = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  const items = useShopItems(categoryId as string);
  const category = useCategory(categoryId as string);

  if (category === undefined) return <div>loading</div>;
  return (
    <Layout
      breadcrumbProps={{
        links: [{ label: 'TOP', href: '/' }],
        current: `${category.name}商品一覧ページ`,
      }}
      title={`${category.name}商品一覧ページ`}
    >
      <Wrapper>
        <HeadWrapper>
          <Headline label={`${category.name}一覧`} headlineTypes="large" />
        </HeadWrapper>
        <ItemContainer>
          {items?.map((e) => (
            <Link key={e.id} href={`/detail/${e.id}`} passHref>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>
                <CardDetail itemId={e.id} />
              </a>
            </Link>
          ))}
        </ItemContainer>
      </Wrapper>
    </Layout>
  );
};

export default List;
