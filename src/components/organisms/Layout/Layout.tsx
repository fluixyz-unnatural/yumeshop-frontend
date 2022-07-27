import Head from 'next/head';
import { ReactNode, VFC } from 'react';
import { BreadCrumb, BreadCrumbProps } from '../BreadCrumb';
import { Footer } from '../Footer';
import { Header } from '../Header';

export type LayoutProps = {
  breadcrumbProps: BreadCrumbProps;
  title: string;
  children?: ReactNode;
};

export const Layout: VFC<LayoutProps> = ({
  breadcrumbProps,
  title,
  children,
}) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <Header />
    <BreadCrumb {...breadcrumbProps} />
    {children}
    <BreadCrumb {...breadcrumbProps} />
    <Footer />
  </>
);
