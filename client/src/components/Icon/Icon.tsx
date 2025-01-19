import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";

interface IconProps {
  icon: IconProp;
  size?: "sm" | "lg" | "1x" | "2x" | "3x" | "4x" | "5x";
  color?: string;
  onClick?: () => void;
}

const StyledIcon = styled.div<{ color?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ color }) => color || "inherit"};

  &:hover {
    opacity: 0.8;
  }
`;

const Icon: React.FC<IconProps> = ({ icon, size = "1x", color, onClick }) => {
  return (
    <StyledIcon color={color} onClick={onClick}>
      <FontAwesomeIcon icon={icon} size={size} />
    </StyledIcon>
  );
};

export default Icon;
