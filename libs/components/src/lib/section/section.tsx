import clsx from 'clsx';
import { HtmlHTMLAttributes } from 'react';
import { SectionHeading } from '../section-heading';

/* eslint-disable-next-line */
export interface SectionProps extends HtmlHTMLAttributes<HTMLDivElement> {
  title?: string;
  subTitle?: string;
  description?: string;
  containerClassName?: string;
}

export function Section({
  className,
  title,
  subTitle,
  description,
  children,
  containerClassName = 'mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8',
  ...props
}: SectionProps) {
  return (
    <section className={clsx('relative', className)} {...props}>
      <div className={containerClassName}>
        <SectionHeading
          title={title}
          subTitle={subTitle}
          description={description}
        />
        {children}
      </div>
    </section>
  );
}

export default Section;
