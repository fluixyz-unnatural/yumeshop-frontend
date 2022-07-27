import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Headline } from 'src/components/atoms/Headline';
import { CardDetail } from 'src/components/organisms/Cards/CardDetail';
import { Layout } from 'src/components/organisms/Layout/Layout';
import { useCategory } from 'src/hooks/useCategory';
import { useShopItems } from 'src/hooks/useShopItems';
import { breakpoints, fontSizes, spacingSizes } from 'src/styles/Tokens';
import styled from 'styled-components';

const Wrapper = styled.div`
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

const NoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${spacingSizes.xl} 0;
  @media screen and (min-width: ${breakpoints.pc}) {
    margin: ${spacingSizes.xl} 0;
  }
`;

const NoItemText = styled.p`
  font-weight: bold;
  font-size: ${fontSizes.fontSize24};
  @media screen and (min-width: ${breakpoints.pc}) {
    font-size: ${fontSizes.fontSize32};
  }
`;

const IconWrapper = styled.div`
  width: 140px;
  height: 140px;
  margin-bottom: ${spacingSizes.md};
  position: relative;
  @media screen and (min-width: ${breakpoints.tb}) {
    width: 244px;
    height: 244px;
    margin-bottom: ${spacingSizes.md};
  }
  @media screen and (min-width: ${breakpoints.pc}) {
    width: 350px;
    height: 350px;
    margin-bottom: ${spacingSizes.lg};
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
        {items && items.length > 0 ? (
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
        ) : (
          <NoItemContainer>
            <IconWrapper>
              <Image
                src="/icons/NoHamburger.svg"
                layout="responsive"
                width="400"
                height="400"
              />
            </IconWrapper>
            <NoItemText>商品がありませんでした</NoItemText>
          </NoItemContainer>
        )}
      </Wrapper>
    </Layout>
  );
};

export default List;
