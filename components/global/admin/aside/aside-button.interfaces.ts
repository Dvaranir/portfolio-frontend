import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IAsideButtonProps {
  href: string;
  text: string;
  icon: IconDefinition;
  style?: { fontSize?: number; color?: string };
}
