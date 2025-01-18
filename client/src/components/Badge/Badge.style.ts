import styled from "styled-components";

interface StyledBadgeProps {
  color?: string;
  textColor?: string;
}

export const StyledBadge = styled.span<StyledBadgeProps>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  font-weight: bold;
  border-radius: 0.375rem;
  text-align: center;
  white-space: nowrap;

  background-color: ${({ color }) => color || "#6c757d"};
  color: ${({ textColor }) => textColor || "white"};
`;
