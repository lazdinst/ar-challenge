import React from "react";
import { StyledButton } from "./Button.style";
import { StyledLoader } from "./Loader.style";
interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  content?: React.ReactNode | string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading,
  content,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={disabled}
    >
      {loading ? <StyledLoader size={size} /> : content ? content : children}
    </StyledButton>
  );
};

export default Button;
