import { render } from '@testing-library/react';
import { Suspense } from 'react';

import HomeView from './home-view';

describe('HomeView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Suspense>
        <HomeView />
      </Suspense>
    );
    expect(baseElement).toBeTruthy();
  });
});
