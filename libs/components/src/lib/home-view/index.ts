import dynamic from 'next/dynamic';

export type { HomeViewProps } from './home-view';

export const HomeView = dynamic(() => import('./home-view'), {
  // TODO enable suspense in production env
  suspense: false,
});

export default HomeView;
