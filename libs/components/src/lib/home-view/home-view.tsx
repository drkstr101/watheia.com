import {
  ArrowTopRightOnSquareIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid';
import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';
import { CloudIllustration, SectionHeading } from '@waweb/components';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Featured', href: '/blog/category/featured' },
    imageUrl:
      'https://www.datocms-assets.com/63265/1667414251-photo-1496128858413-b36217c2ce36.jpeg',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    author: {
      name: 'Aaron R Miller',
      imageUrl:
        'https://www.datocms-assets.com/63265/1644871523-aaron-r-miller.jpg',
      href: '/user/amiller',
    },
    readingLength: '6 min',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Featured', href: '/blog/category/featured' },
    imageUrl:
      'https://www.datocms-assets.com/63265/1667414246-photo-1492724441997-5dc865305da7.jpeg',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    author: {
      name: 'Aaron R Miller',
      imageUrl:
        'https://www.datocms-assets.com/63265/1644871523-aaron-r-miller.jpg',
      href: '/user/amiller',
    },
    readingLength: '4 min',
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Featured', href: '/blog/category/featured' },
    imageUrl:
      'https://www.datocms-assets.com/63265/1667414240-photo-1547586696-ea22b4d4235d.jpeg',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    author: {
      name: 'Aaron R Miller',
      imageUrl:
        'https://www.datocms-assets.com/63265/1644871523-aaron-r-miller.jpg',
      href: '/user/amiller',
    },
    readingLength: '11 min',
  },
];

const engineeringFeatures = [
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
const designFeatures = [
  {
    id: 1,
    name: 'UI/UX Design',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    id: 2,
    name: 'Design systems',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: EnvelopeIcon,
  },
];

const Hero = () => (
  <section className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
          <div className="lg:py-24">
            <Link href="/contact" legacyBehavior passHref>
              <a className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-teal-100 sm:text-base lg:text-sm xl:text-base">
                <span className="rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                  Hire us
                </span>
                <span className="ml-4 text-sm">Book free consultation</span>
                <ChevronRightIcon
                  className="ml-2 h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </a>
            </Link>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span className="block">We make technology</span>
              <span className="block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">
                Work for you
              </span>
            </h1>
            <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat.
            </p>
            <div className="mt-10 sm:mt-12">
              <form
                action="/demo"
                method="GET"
                className="sm:mx-auto sm:max-w-xl lg:mx-0"
              >
                <div className="sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="name" className="sr-only">
                      User name
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoFocus
                      placeholder="Enter your name"
                      className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                      data-testid="wa-hero-name-input"
                    />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                      Go realtime
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <CloudIllustration />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AlternatingFeatures = () => {
  return (
    <section className="overflow-hidden bg-gray-50 py-16 lg:py-24">
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <svg
          className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-teal-100"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <SectionHeading
          title="services"
          subTitle="What we can offer you"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus"
        />

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Engineering
            </h3>
            <p className="mt-3 max-w-prose text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <dl className="mt-10 space-y-10">
              {engineeringFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base max-w-prose text-gray-700">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-teal-100"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <Image
              className="relative mx-auto max-w-lg"
              width={980}
              height={1140}
              src="https://www.datocms-assets.com/63265/1667413194-feature-example-1.png"
              alt="Feature example 1"
            />
          </div>
        </div>

        <svg
          className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-teal-100"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Design
              </h3>
              <p className="mt-3 text-lg text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                ex obcaecati natus eligendi delectus, cum deleniti sunt in
                labore nihil quod quibusdam expedita nemo.
              </p>

              <dl className="mt-10 space-y-10">
                {designFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-700">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
              <svg
                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-teal-100"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <Image
                className="relative mx-auto max-w-lg"
                width={980}
                height={748}
                src="https://www.datocms-assets.com/63265/1667413199-feature-example-2.png"
                alt="Feature example 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => (
  <section className="bg-gradient-to-r from-teal-500 to-cyan-600 pb-16 lg:relative lg:z-10 lg:pb-0">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
      <div className="relative lg:-my-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1/2 bg-gray-50 lg:hidden"
        />
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
          <div className="aspect-w-10 aspect-h-6 overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
            <Image
              fill
              className="object-cover rounded-xl shadow-xl lg:h-full lg:w-full"
              src="https://www.datocms-assets.com/63265/1646325583-photo-1520333789090-1afc82db536a.jpeg"
              alt="Woman working at desk"
            />
          </div>
        </div>
      </div>
      <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
          <blockquote>
            <div>
              <svg
                className="h-12 w-12 text-white opacity-25"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="mt-6 text-2xl font-medium text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                urna nulla vitae laoreet augue. Amet feugiat est integer dolor
                auctor adipiscing nunc urna, sit.
              </p>
            </div>
            <footer className="mt-6">
              <p className="text-base font-medium text-white">Judith Black</p>
              <p className="text-base font-medium text-cyan-100">
                CEO at PureInsights
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
);

const RecentPosts = () => (
  <div className="relative bg-gradient-to-b from-gray-200 to-gray-50 py-16 sm:py-24 lg:py-32">
    <div className="relative">
      <SectionHeading
        title="Recent Posts"
        subTitle="From the blog"
        description="Our musings on engineering, design, business, and more."
      />
      <div className="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col overflow-hidden rounded-lg hover:shadow-lg"
          >
            <div className="flex-shrink-0">
              <Image
                width={1679}
                height={1119}
                className="h-48 w-full object-cover"
                src={post.imageUrl}
                alt=""
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-cyan-700">
                  <Link href={post.category.href} className="hover:underline">
                    {post.category.name}
                  </Link>
                </p>
                <Link href={post.href} legacyBehavior passHref>
                  <a className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-700">
                      {post.preview}
                    </p>
                  </a>
                </Link>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <Link href={post.author.href} legacyBehavior passHref>
                    <a>
                      <Image
                        width={320}
                        height={320}
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt={post.author.name}
                      />
                    </a>
                  </Link>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <Link href={post.author.href} className="hover:underline">
                      {post.author.name}
                    </Link>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingLength} read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CallToAction = () => (
  <div className="relative bg-gray-900">
    <div className="relative h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <Image
        width={1920}
        height={1080}
        className="h-full w-full object-cover"
        src="https://www.datocms-assets.com/63265/1667414965-photo-1525130413817-d45c1d127c42.jpeg"
        alt=""
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
      />
    </div>
    <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
      <div className="md:ml-auto md:w-1/2 md:pl-10">
        <h2 className="text-lg font-semibold text-gray-300">
          Award winning support
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          We’re here to help
        </p>
        <p className="mt-3 text-lg text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
          tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
          et fermentum, augue. Aliquet amet volutpat quisque ut interdum
          tincidunt duis.
        </p>
        <div className="mt-8">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Get support
              <ArrowTopRightOnSquareIcon
                className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

import styles from './home-view.module.css';

/* eslint-disable-next-line */
export interface HomeViewProps {}

export function HomeView(props: HomeViewProps) {
  return (
    <main className={styles['container']}>
      <Hero />
      <AlternatingFeatures />
      <Testimonial />
      <RecentPosts />
      <CallToAction />
    </main>
  );
}

export default HomeView;
