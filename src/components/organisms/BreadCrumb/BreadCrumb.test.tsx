import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as BreadCrumbStory from './BreadCrumb.stories';

const { Default } = composeStories(BreadCrumbStory);

describe('BreadCrumb', () => {
  it('TOP > xxx一覧 > hoge', () => {
    render(<Default />);
    const topHref = screen.getByText('TOP').getAttribute('href');
    expect(topHref).toBe('/');
    const listHref = screen.getByText('xxx一覧').getAttribute('href');
    expect(listHref).toBe('/list');
    expect(screen.getByText('hoge')).toBeInTheDocument();
  });
});
