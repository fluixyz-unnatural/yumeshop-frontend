import type { Meta, Story } from '@storybook/react/types-6-0';
import { LinkButton, LinkButtonProps } from './LinkButton';

export default {
  component: LinkButton,
  title: 'atoms/LinkButton',
} as Meta;

const Template: Story<LinkButtonProps> = (args) => <LinkButton {...args} />;

export const Default = Template.bind({});
Default.args = { href: '/', label: 'TOP' };
