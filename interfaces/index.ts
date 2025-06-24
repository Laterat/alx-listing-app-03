

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  children?: React.ReactNode;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}