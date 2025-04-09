export type ButtonProps = {
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};