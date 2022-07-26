import Link from 'next/link';
import { VFC } from 'react';
import {
  breakpoints,
  colors,
  fontSizes,
  spacingSizes,
} from 'src/styles/Tokens';
import styled from 'styled-components';

export type LinkButtonProps = {
  label: string;
  href: string;
};

const Wrapper = styled.div`
  background: ${colors.White};
  padding: ${spacingSizes.xs};
  font-size: ${fontSizes.fontSize12};
  border-radius: 4px;
  width: fit-content;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: ${breakpoints.pc}) {
    font-size: ${fontSizes.fontSize18};
    padding: ${spacingSizes.xxs} ${spacingSizes.xs};
  }
`;

export const LinkButton: VFC<LinkButtonProps> = ({ label, href }) => (
  <Wrapper>
    <Link href={href}>{label}</Link>
  </Wrapper>
);
