import type { Meta, Story } from '@storybook/react/types-6-0';
import { CardDetail } from './CardDetail';

export default {
  component: CardDetail,
  title: 'organisms/CardDetail',
} as Meta;

const Template: Story = () => (
  <CardDetail itemId="4dfd9672-5633-4328-b104-832e2f18c2a7" />
);

export const header = Template.bind({});
