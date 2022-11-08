import { SectionHeading } from '@waweb/components';
import { home } from '@waweb/content';
import Image from 'next/image';
import Link from 'next/link';

export default function RecentPosts() {
  return (
    <div className="relative bg-gradient-to-b from-gray-200 to-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="relative">
        <SectionHeading
          title="Recent Posts"
          subTitle="From the blog"
          description="Our musings on engineering, design, business, and more."
        />
        <div className="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
          {home.blogPosts.map((post) => (
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
}
