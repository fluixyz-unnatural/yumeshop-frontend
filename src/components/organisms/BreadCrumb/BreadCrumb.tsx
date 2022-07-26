import { VFC } from 'react';
import { LinkButton } from 'src/components/atoms/Button';
import { breakpoints, colors, spacingSizes } from 'src/styles/Tokens';
import styled from 'styled-components';

export type BreadCrumbProps = {
  links: { label: string; href: string }[];
  current: string;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacingSizes.xs};
  background-color: ${colors.YumeWhiteGreen2};
  padding: ${spacingSizes.xxs};
  box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: ${breakpoints.pc}) {
    gap: ${spacingSizes.sm};
    padding: ${spacingSizes.sm};
  }
`;

export const BreadCrumb: VFC<BreadCrumbProps> = ({ links, current }) => (
  <Wrapper>
    {links.map((e) => (
      <>
        <LinkButton {...e} />
        {'>'}
      </>
    ))}
    <span>{current}</span>
  </Wrapper>
);
