export interface ButtonProps {
  children: string;
  disabled?: boolean;
  primary?: boolean;
  submit?: boolean;
  onClick: () => void;
  className?: string;
}
