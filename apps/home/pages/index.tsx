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
import { SectionHeading } from '@waweb/components';
import Image from 'next/image';
import { SVGProps } from 'react';
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

const CloudIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={601}
    height={600}
    viewBox="0 0 601 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.07}
      d="M546.232 252.902c0 3.258-.072 6.516-.289 9.557C577.053 286.135 601 336.889 601 381.561c0 48.655-28.433 71.606-63.522 51.334-.072-.073-.145-.073-.217-.145L316.815 305.539c-.073-.073-.145-.073-.29-.145-39.43-22.807-71.408-85.58-71.408-140.244 0-51.189 28.071-77.181 64.029-61.47 4.413-35.115 27.926-50.247 56.287-33.812 13.602 7.892 26.118 21.721 35.885 38.374 14.18-21.07 38.345-26.427 65.692-10.644 43.771 25.197 79.222 94.775 79.222 155.304Z"
      fill="url(#a)"
    />
    <path
      opacity={0.4}
      d="M510.058 287.655c0 3.258-.072 6.517-.289 9.557 31.11 23.676 55.057 74.43 55.057 119.103 0 48.654-28.433 71.606-63.522 51.333-.072-.072-.145-.072-.217-.145L280.641 340.292c-.072-.072-.145-.072-.29-.145-39.43-22.807-71.408-85.58-71.408-140.244 0-51.188 28.072-77.181 64.029-61.469 4.413-35.116 27.926-50.248 56.287-33.812 13.602 7.892 26.118 21.72 35.885 38.373 14.18-21.069 38.345-26.427 65.693-10.643 43.771 25.196 79.221 94.775 79.221 155.303Z"
      fill="url(#b)"
    />
    <path
      opacity={0.2}
      d="m161.048 349.632-33.569-19.404v-11.367l33.569 19.404c2.75 1.593 6.729 4.778 10.129 9.702 3.69 5.285 6.294 11.946 6.294 19.186 0 7.965-2.025 12.526-5.932 13.829-3.618 1.231-7.886-.869-10.563-2.389l-13.819-7.964-.072-.073c-1.158-.724-3.039-1.375-4.558-.941-1.23.362-2.605 1.593-2.605 6.009 0 4.417 1.375 7.168 2.533 8.761 1.447 2.027 3.328 3.475 4.485 4.055l.145.072 42.179 24.4v11.367l-41.962-24.255c-2.894-1.52-7.018-4.706-10.635-9.774-3.907-5.503-6.656-12.526-6.584-20.345 0-7.747 2.677-11.73 6.584-12.816 3.617-1.013 7.741.435 10.635 2.245l13.674 7.892c1.953 1.158 3.473 1.665 4.413 1.303.724-.217 2.171-1.303 2.171-7.095 0-3.693-1.23-6.155-2.315-7.82-1.303-1.882-3.111-3.33-4.197-3.982Z"
      fill="#fff"
    />
    <path
      d="M134.714 327.404c0 9.34-5.499 13.757-12.227 9.919-6.729-3.909-12.227-14.625-12.227-24.037 0-9.34 5.498-13.757 12.227-9.919 6.728 3.909 12.227 14.697 12.227 24.037Z"
      fill="url(#c)"
    />
    <path
      d="M206.339 428.044c0 9.34-5.499 13.756-12.227 9.919-6.729-3.91-12.227-14.625-12.227-24.038 0-9.34 5.498-13.756 12.227-9.919 6.728 3.91 12.227 14.698 12.227 24.038Z"
      fill="url(#d)"
    />
    <path
      opacity={0.07}
      d="m264.145 187.522 216.973 125.329v114.903L264.072 302.425l.073-114.903Z"
      fill="url(#e)"
    />
    <path
      opacity={0.3}
      d="m235.133 202.003 216.973 125.329v114.903L235.133 316.906V202.003Z"
      fill="url(#f)"
    />
    <path
      d="M254.594 270.424c0 9.267 5.498 19.911 12.227 23.82 6.728 3.91 12.227-.434 12.227-9.702 0-9.267-5.499-19.91-12.227-23.82-6.729-3.91-12.227.434-12.227 9.702Z"
      fill="url(#g)"
    />
    <path
      opacity={0.15}
      d="M285.199 288.307c0 4.272 2.532 9.268 5.716 11.078 3.111 1.81 5.643-.217 5.643-4.489s-2.532-9.268-5.716-11.078c-3.111-1.81-5.643.217-5.643 4.489ZM302.635 298.371c0 4.271 2.532 9.267 5.715 11.077 3.111 1.81 5.644-.217 5.644-4.489 0-4.271-2.533-9.267-5.716-11.077-3.111-1.81-5.643.217-5.643 4.489ZM397.338 317.919v65.38l-8.537-4.923v-65.38l8.537 4.923ZM416.004 328.78v65.379l-8.537-4.923v-65.38l8.537 4.924ZM434.742 339.64v65.38l-8.537-4.924v-65.379l8.537 4.923Z"
      fill="#fff"
    />
    <path
      opacity={0.07}
      d="m264.072 344.563 216.974 125.329v114.903L264.072 459.466V344.563Z"
      fill="url(#h)"
    />
    <path
      opacity={0.3}
      d="m235.133 359.768 216.973 125.329V600L235.133 474.671V359.768Z"
      fill="url(#i)"
    />
    <path
      d="M254.594 428.188c0 9.268 5.498 19.911 12.227 23.821 6.728 3.91 12.227-.435 12.227-9.702 0-9.268-5.499-19.911-12.227-23.82-6.729-3.91-12.227.434-12.227 9.701Z"
      fill="url(#j)"
    />
    <path
      opacity={0.15}
      d="M285.199 446.145c0 4.271 2.532 9.267 5.716 11.077 3.111 1.81 5.643-.217 5.643-4.489s-2.532-9.267-5.716-11.077c-3.111-1.81-5.643.144-5.643 4.489ZM302.562 456.208c0 4.272 2.533 9.268 5.716 11.078 3.111 1.81 5.643-.217 5.643-4.489s-2.532-9.267-5.715-11.078c-3.111-1.882-5.644.145-5.644 4.489ZM397.338 477.929v65.38l-8.537-4.924v-65.379l8.537 4.923ZM416.004 488.79v65.379l-8.537-4.923v-65.38l8.537 4.924ZM434.742 499.65v65.379l-8.537-4.923v-65.379l8.537 4.923Z"
      fill="#fff"
    />
    <path
      opacity={0.3}
      d="m42.469 31.785 135.219 78.122v250.73l-135.22-78.195V31.785Z"
      fill="url(#k)"
    />
    <path
      d="M125.959 122.577c0 12.526-7.235 18.463-16.134 13.25-8.899-5.213-16.134-19.549-16.134-32.074 0-12.526 7.235-18.463 16.134-13.25 8.899 5.213 16.134 19.549 16.134 32.074Z"
      fill="url(#l)"
    />
    <path
      d="M109.825 145.891c-14.398-8.398-26.263-.507-28.36 17.594-.363 3.113 2.025 7.313 4.919 8.978l46.954 27.441c2.894 1.665 5.282.362 4.92-3.259-2.171-20.634-14.108-42.355-28.433-50.754Z"
      fill="url(#m)"
    />
    <path
      opacity={0.15}
      d="m69.6 194.401 80.596 46.555v9.846L69.6 204.248v-9.847ZM77.775 218.656l63.884 36.853v9.846l-63.884-36.853v-9.846Z"
      fill="#fff"
    />
    <path
      d="M94.053 260.07 0 205.696v28.02l94.053 54.374v-28.02Z"
      fill="url(#n)"
    />
    <path
      opacity={0.2}
      d="m206.845 0 20.113 39.532c2.749 5.43 2.315 10.86-1.013 12.163-3.328 1.304-8.247-2.1-10.997-7.53l-.217-.506v43.876c0 4.996-3.472 7.023-7.813 4.561-4.341-2.534-7.814-8.544-7.814-13.54V34.682l-.217.217c-2.749 2.244-7.741-.072-10.997-5.213-3.328-5.14-3.762-11.077-1.013-13.322L206.845 0Z"
      fill="url(#o)"
    />
    <path
      opacity={0.2}
      d="m206.845 583.709-20.112-39.532c-2.75-5.43-2.316-10.86 1.012-12.163 3.328-1.303 8.248 2.099 10.997 7.53l.217.506v-43.876c0-4.995 3.473-7.023 7.814-4.561 4.341 2.534 7.814 8.544 7.814 13.539v43.876l.217-.217c2.749-2.244 7.741.073 10.997 5.213 3.328 5.141 3.762 11.078 1.013 13.322l-19.969 16.363Z"
      fill="url(#p)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={588.058}
        y1={114.638}
        x2={364.033}
        y2={326.972}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="b"
        x1={551.876}
        y1={149.392}
        x2={327.852}
        y2={361.726}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="c"
        x1={134.714}
        y1={320.566}
        x2={110.26}
        y2={320.566}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#22D3EE" />
        <stop offset={1} stopColor="#99F6E4" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={206.339}
        y1={421.206}
        x2={181.885}
        y2={421.206}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#22D3EE" />
        <stop offset={1} stopColor="#99F6E4" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={368.16}
        y1={196.711}
        x2={376.256}
        y2={399.958}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="f"
        x1={339.219}
        y1={211.191}
        x2={347.315}
        y2={414.438}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="g"
        x1={279.048}
        y1={277.702}
        x2={254.594}
        y2={277.702}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#22D3EE" />
        <stop offset={1} stopColor="#99F6E4" />
      </linearGradient>
      <linearGradient
        id="h"
        x1={368.144}
        y1={353.776}
        x2={376.24}
        y2={557.023}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="i"
        x1={339.204}
        y1={368.981}
        x2={347.3}
        y2={572.227}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="j"
        x1={279.048}
        y1={435.467}
        x2={254.594}
        y2={435.467}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#22D3EE" />
        <stop offset={1} stopColor="#99F6E4" />
      </linearGradient>
      <linearGradient
        id="k"
        x1={192.18}
        y1={53.821}
        x2={72.012}
        y2={261.857}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="l"
        x1={125.959}
        y1={113.461}
        x2={93.691}
        y2={113.461}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#22D3EE" />
        <stop offset={1} stopColor="#99F6E4" />
      </linearGradient>
      <linearGradient
        id="m"
        x1={138.294}
        y1={171.925}
        x2={81.428}
        y2={171.925}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#22D3EE" />
        <stop offset={1} stopColor="#99F6E4" />
      </linearGradient>
      <linearGradient
        id="n"
        x1={94.053}
        y1={247.389}
        x2={0}
        y2={247.389}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#22D3EE" />
        <stop offset={1} stopColor="#99F6E4" />
      </linearGradient>
      <linearGradient
        id="o"
        x1={221.158}
        y1={39.876}
        x2={184.449}
        y2={60.324}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="p"
        x1={192.494}
        y1={543.86}
        x2={229.203}
        y2={523.412}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Hero = () => (
  <section className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
          <div className="lg:py-24">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-teal-100 sm:text-base lg:text-sm xl:text-base"
            >
              <span className="rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                Hire us
              </span>
              <span className="ml-4 text-sm">Book free consultation</span>
              <ChevronRightIcon
                className="ml-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
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
                      placeholder="Enter your name"
                      className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
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
                <Link href={post.href} className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-700">{post.preview}</p>
                </Link>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <Link href={post.author.href}>
                    <Image
                      width={320}
                      height={320}
                      className="h-10 w-10 rounded-full"
                      src={post.author.imageUrl}
                      alt={post.author.name}
                    />
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

export function Index() {
  return (
    <>
      <Hero />
      <AlternatingFeatures />
      <Testimonial />
      <RecentPosts />
      <CallToAction />
    </>
  );
}

export default Index;
