import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  title?: string;
  titleId?: string;
}

export interface DescriptionListItem {
  id: number;
  icon: (props: IconProps) => JSX.Element;
  name: string;
  description: string;
}

export interface DescriptionListProps {
  title: string;
  description: string;
  items: DescriptionListItem[];
}

export function DescriptionList({
  title,
  description,
  items: features,
}: DescriptionListProps) {
  return (
    <>
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        {title}
      </h3>
      <p className="mt-3 max-w-prose text-lg text-gray-700">{description}</p>
      <dl className="mt-10 space-y-10">
        {features.map((item) => (
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
    </>
  );
}

export default DescriptionList;
