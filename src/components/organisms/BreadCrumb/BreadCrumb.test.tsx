import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as BreadCrumbStory from './BreadCrumb.stories';

const { Default } = composeStories(BreadCrumbStory);

describe('BreadCrumb', () => {
  it('TOP > xxx一覧 > hoge', () => {
    render(<Default />);
    expect(screen.getByText('TOP')).toBeInTheDocument();
    expect(screen.getByText('xxx一覧')).toBeInTheDocument();
    expect(screen.getByText('hoge')).toBeInTheDocument();
  });
});
