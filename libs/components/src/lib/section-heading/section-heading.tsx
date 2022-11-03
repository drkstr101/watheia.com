import clsx from 'clsx';
import { HtmlHTMLAttributes } from 'react';

/* eslint-disable-next-line */
export interface SectionHeadingProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  title?: string;
  subTitle?: string;
  description?: string;
}

export function SectionHeading({
  title,
  subTitle,
  description,
  className,
  ...props
}: SectionHeadingProps) {
  if (!title && !subTitle && !description) {
    return null;
  }

  return (
    <div
      className={clsx(
        'mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8',
        className
      )}
      {...props}
    >
      <h2 className="text-lg font-semibold text-cyan-600">{title}</h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {subTitle}
      </p>
      <p className="mx-auto mt-5 max-w-prose text-xl text-gray-700">
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
