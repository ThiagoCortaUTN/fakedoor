export interface AccordionCardProps {
  title: string;
  children: React.ReactNode;
  completed: boolean;
  number?: string;
  className?: string;
  count: number;
  image: string;
}

export interface AccordionCardItemProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  expandedClassName?: string;
  module: string;
}
