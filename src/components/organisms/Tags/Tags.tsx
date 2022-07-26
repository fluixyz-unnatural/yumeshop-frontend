import { VFC } from 'react';
import { Tag, TagProps } from 'src/components/atoms/Tag';
import { breakpoints } from 'src/styles/Tokens';
import styled from 'styled-components';

export type TagsProps = {
  tags: TagProps[];
};

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  @media screen and (min-width: ${breakpoints.pc}) {
    gap: 8px;
  }
`;

export const Tags: VFC<TagsProps> = ({ tags }) => (
  <Wrapper>
    {tags.map((tag) => (
      <Tag key={tag.name} {...tag} />
    ))}
  </Wrapper>
);
