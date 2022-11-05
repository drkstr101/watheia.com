import AlternatingFeatures from './sections/alternating-features';
import CallToAction from './sections/call-to-action';
import Hero from './sections/hero';
import RecentPosts from './sections/recent-posts';
import Testimonial from './sections/testimonial';

/* eslint-disable-next-line */
export interface HomeViewProps {}

export function HomeView(props: HomeViewProps) {
  return (
    <main>
      <Hero />
      <AlternatingFeatures />
      <Testimonial />
      <RecentPosts />
      <CallToAction />
    </main>
  );
}

export default HomeView;
