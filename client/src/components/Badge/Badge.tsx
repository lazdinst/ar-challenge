import React from "react";
import { StyledBadge } from "./Badge.style";

interface BadgeProps {
  label: string;
  color?: string; // Custom background color
  textColor?: string; // Custom text color
}

const Badge: React.FC<BadgeProps> = ({ label, color, textColor }) => {
  return (
    <StyledBadge color={color} textColor={textColor}>
      {label}
    </StyledBadge>
  );
};

export default Badge;
