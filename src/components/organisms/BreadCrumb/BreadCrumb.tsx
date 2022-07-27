import React, { VFC } from 'react';
import { LinkButton, LinkButtonProps } from 'src/components/atoms/Button';
import { breakpoints, colors, spacingSizes } from 'src/styles/Tokens';
import styled from 'styled-components';

export type BreadCrumbProps = {
  links: LinkButtonProps[];
  current: string;
};

const Wrapper = styled.div`
  width: 100%;
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
  & > * {
    flex-shrink: 0;
  }
`;

const CurrentWrapper = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  flex-shrink: 1;
`;

export const BreadCrumb: VFC<BreadCrumbProps> = ({ links, current }) => (
  <Wrapper>
    {links.map((e) => (
      <React.Fragment key={e.href}>
        <LinkButton {...e} />
        <span>{'>'}</span>
      </React.Fragment>
    ))}
    <CurrentWrapper>{current}</CurrentWrapper>
  </Wrapper>
);
