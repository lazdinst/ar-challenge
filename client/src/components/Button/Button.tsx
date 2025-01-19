import React from "react";
import { StyledButton } from "./Button.style";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
