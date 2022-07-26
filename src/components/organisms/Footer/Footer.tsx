import { VFC } from 'react';
import styled from 'styled-components';
import {
  breakpoints,
  colors,
  fontSizes,
  spacingSizes,
} from 'src/styles/Tokens';
import Link from 'next/link';

const Wrapper = styled.footer`
  width: 100%;
  padding: 16px;
  font-size: 12px;
  background-color: ${colors.White};
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  height: 177px;
  @media screen and (min-width: ${breakpoints.pc}) {
    font-size: ${fontSizes.fontSize18};
    height: 197px;
    padding: 16px 64px;
  }
`;
const LinksWrapper = styled.div`
  align-self: flex-start;
`;
const LinksLine = styled.div`
  display: flex;
  gap: ${spacingSizes.xxs};
  @media screen and (min-width: ${breakpoints.pc}) {
    gap: ${spacingSizes.xs};
  }
  & > a {
    text-decoration: underline;
  }
`;

export const Footer: VFC = () => (
  <Wrapper>
    <LinksWrapper>
      <LinksLine>
        <Link href="/">メニューメニュー</Link>｜
        <Link href="/">メニューメニュー</Link>
      </LinksLine>
      <LinksLine>
        <Link href="/">メニュー</Link>｜<Link href="/">メニューメニュー</Link>｜
        <Link href="/">メニュー</Link>
      </LinksLine>
      <LinksLine>
        <Link href="/">メニュー</Link>｜<Link href="/">メニュー</Link>｜
        <Link href="/">メニューメニュー</Link>
      </LinksLine>
      <LinksLine>
        <Link href="/">メニューメニュー</Link>｜
        <Link href="/">メニューメニュー</Link>
      </LinksLine>
    </LinksWrapper>
    <p>Copyright {new Date().getFullYear()} YumemiShop</p>
  </Wrapper>
);
