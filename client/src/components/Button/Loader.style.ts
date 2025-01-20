import styled, { keyframes } from "styled-components";

// Loader animation
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled loader
export const StyledLoader = styled.div<{ size: string }>`
  border: 2px solid transparent;
  border-top: 2px solid white; /* Loader color */
  border-radius: 50%;
  width: ${({ size }) =>
    size === "small" ? "0.75rem" : size === "large" ? "1.25rem" : "1rem"};
  height: ${({ size }) =>
    size === "small" ? "0.75rem" : size === "large" ? "1.25rem" : "1rem"};
  animation: ${spin} 0.8s linear infinite;
  margin-right: 0.5rem; /* Space between loader and button text */
`;
