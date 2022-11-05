import { render } from '@testing-library/react';

import { BoltIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline';
import DescriptionList from './description-list';
import { Feature } from '@waweb/types';

export const sampleFeatures: Feature[] = [
  {
    id: 1,
    name: 'Digital transformations',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: 'Custom software development',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'Staff augmentation',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
];

describe('ServiceAspect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DescriptionList
        title="My Title"
        description="My Description"
        items={sampleFeatures}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
