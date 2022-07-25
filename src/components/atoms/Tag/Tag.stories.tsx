import type { Meta, Story } from '@storybook/react/types-6-0';
import { Tag, TagProps } from './Tag';

export default {
  component: Tag,
  title: 'atoms/Tag',
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const tag = Template.bind({});
tag.args = {
  name: '新商品',
  color: 'orange',
};
