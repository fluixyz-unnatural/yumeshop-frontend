import type { Meta, Story } from '@storybook/react/types-6-0';
import * as TagStories from 'src/components/atoms/Tag/index.stories';
import { TagProps } from 'src/components/atoms/Tag';
import { Tags, TagsProps } from './index';

export default {
  component: Tags,
  title: 'organisms/Tags',
} as Meta;

const Template: Story<TagsProps> = (args) => <Tags {...args} />;

export const Default = Template.bind({});

Default.args = {
  tags: [
    { ...(TagStories.NewItem.args as TagProps) },
    { ...(TagStories.Limited.args as TagProps) },
    { ...(TagStories.Special.args as TagProps) },
  ],
};
