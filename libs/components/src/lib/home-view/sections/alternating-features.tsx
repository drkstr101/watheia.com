import DescriptionList from '../../description-list';
import SectionHeading from '../../section-heading';
import Image from 'next/image';
import { home } from '@waweb/content';

const TopDotsPattern = () => (
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
);

const MidDotsPattern = () => (
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
);

const BottomDotsPattern = () => (
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
);

const WideDotsPattern = () => (
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
);

export default function AlternatingFeatures() {
  return (
    <section className="overflow-hidden bg-gray-50 py-16 lg:py-24">
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <TopDotsPattern />
        <SectionHeading
          title="services"
          subTitle="What have to offer"
          description="We enable startups to launch their first MVP, help small businesses reach more customers online, support medium-sized companies in digital transformations, simplify architectures and reduce operations costs for large corporations, and migrate legacy systems for the f500."
        />

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <DescriptionList
              title="Digital Transformation"
              description="Leverage our experience to quickly deliver digital transformation through technology system development, integration, and modernization."
              items={home.transformationFeatures}
            />
          </div>

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <MidDotsPattern />
            <Image
              className="relative mx-auto max-w-lg"
              width={980}
              height={1140}
              src="https://www.datocms-assets.com/63265/1667413194-feature-example-1.png"
              alt="Feature example 1"
            />
          </div>
        </div>

        <BottomDotsPattern />

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <DescriptionList
                title="Digital Design"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                ex obcaecati natus eligendi delectus, cum deleniti sunt in
                labore nihil quod quibusdam expedita nemo."
                items={home.designFeatures}
              />
            </div>

            <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
              <WideDotsPattern />
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
}
