import Head from 'next/head';
import { ReactNode, VFC } from 'react';
import styled from 'styled-components';
import { BreadCrumb, BreadCrumbProps } from '../BreadCrumb';
import { Footer } from '../Footer';
import { Header } from '../Header';

export type LayoutProps = {
  breadcrumbProps: BreadCrumbProps;
  title: string;
  children?: ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Content = styled.div`
  flex-grow: 1;
`;
const FooterWrapper = styled.div`
  justify-self: flex-end;
`;

export const Layout: VFC<LayoutProps> = ({
  breadcrumbProps,
  title,
  children,
}) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Container>
      <Header />
      <BreadCrumb {...breadcrumbProps} />
      <Content>{children}</Content>
      <BreadCrumb {...breadcrumbProps} />
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  </>
);
