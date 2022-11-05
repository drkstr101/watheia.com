import { IconProps } from './IconProps';

export interface Feature {
  id: number;
  icon: (props: IconProps) => JSX.Element;
  name: string;
  description: string;
}
