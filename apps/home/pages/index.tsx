import { Suspense } from 'react';
import { HomeView } from '@waweb/components';

/**
 * TODO Implement loader skeleton
 *
 * @returns
 */
export function Index(): JSX.Element {
  return (
    <Suspense fallback={<div />}>
      <HomeView />
    </Suspense>
  );
}

export default Index;
