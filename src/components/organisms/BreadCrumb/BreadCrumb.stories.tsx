import type { Meta, Story } from '@storybook/react/types-6-0';
import { BreadCrumb, BreadCrumbProps } from './BreadCrumb';

export default {
  component: BreadCrumb,
  title: 'organisms/BreadCrumb',
} as Meta;

const Template: Story<BreadCrumbProps> = (args) => <BreadCrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { href: '/', label: 'TOP' },
    { href: '/list', label: 'xxx一覧' },
  ],
  current: 'hoge',
};
