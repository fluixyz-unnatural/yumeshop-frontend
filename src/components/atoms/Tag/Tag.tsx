import { VFC } from 'react';
import styled from 'styled-components';

export type TagProps = {
  name: string;
  color: string;
};

const Wrapper = styled.span<Pick<TagProps, 'color'>>`
  background-color: ${(props) => props.color};
`;

export const Tag: VFC<TagProps> = ({ name, color }: TagProps) => (
  <Wrapper color={color}>{name}</Wrapper>
);
