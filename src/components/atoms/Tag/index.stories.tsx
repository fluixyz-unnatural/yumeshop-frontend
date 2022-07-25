import type { Meta, Story } from '@storybook/react/types-6-0';
import { Tag, TagProps } from './index';

export default {
  component: Tag,
  title: 'atoms/Tag',
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const NewItem = Template.bind({});
NewItem.args = {
  name: '新商品',
  color: 'orange',
};
export const Limited = Template.bind({});
Limited.args = {
  name: '期間限定',
  color: 'red',
};
export const Special = Template.bind({});
Special.args = {
  name: '特別価格',
  color: 'green',
};
