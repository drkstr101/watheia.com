import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';

describe('Index', () => {
  it('SHOULD render successfully', () => {
    const { container } = render(<Index />);
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });

  // it('SHOULD auto-focus name input field', () => {
  //   const { getByTestId } = render(<Index />);
  //   const input = getByTestId('wa-hero-name-input');

  //   expect(input).toHaveFocus();
  // });
});
