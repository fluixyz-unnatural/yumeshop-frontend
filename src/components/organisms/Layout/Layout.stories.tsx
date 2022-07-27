import type { Meta, Story } from '@storybook/react/types-6-0';
import { Layout } from './index';

export default {
  component: Layout,
  title: 'organisms/Layout',
  parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story = () => (
  <Layout breadcrumbProps={{ current: 'current', links: [] }} title="title" />
);

export const footer = Template.bind({});
