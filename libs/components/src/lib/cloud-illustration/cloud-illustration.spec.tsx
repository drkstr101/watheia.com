import { render } from '@testing-library/react';

import CloudIllustration from './cloud-illustration';

describe('CloudIllustration', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CloudIllustration />);
    expect(baseElement).toBeTruthy();
  });
});
