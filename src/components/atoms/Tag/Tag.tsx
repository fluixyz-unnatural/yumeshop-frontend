import { VFC } from 'react';
import { breakpoints, fontSizes } from 'src/styles/Tokens';
import styled from 'styled-components';

export type TagProps = {
  name: string;
  color: string;
};

const Wrapper = styled.div<Pick<TagProps, 'color'>>`
  display: inline-block;
  background-color: ${(props) => props.color};
  padding: 0px 4px;
  color: white;
  font-size: ${fontSizes.fontSize12};
  @media screen and (min-width: ${breakpoints.pc}) {
    font-size: ${fontSizes.fontSize22};
  }
`;

export const Tag: VFC<TagProps> = ({ name, color }) => (
  <Wrapper color={color}>{name}</Wrapper>
);
