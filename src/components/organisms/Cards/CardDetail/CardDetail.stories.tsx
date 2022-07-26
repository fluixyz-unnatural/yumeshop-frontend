import type { Meta, Story } from '@storybook/react/types-6-0';
import { CardDetail, CardDetailProps } from './CardDetail';

export default {
  component: CardDetail,
  title: 'organisms/CardDetail',
} as Meta;

const Template: Story<CardDetailProps> = (args) => <CardDetail {...args} />;

export const Default = Template.bind({});
Default.args = { itemId: 'e968f17c-2e63-4153-92f0-adfe52693e2e' };
export const Discounted = Template.bind({});
Discounted.args = { itemId: '4dfd9672-5633-4328-b104-832e2f18c2a7' };
