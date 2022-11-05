import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

export const blogPosts = [
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

export const engineeringFeatures = [
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

export const designFeatures = [
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
