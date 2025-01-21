import styled, { css } from "styled-components";

interface StyledButtonProps {
  $variant: "primary" | "secondary" | "danger";
  size: "small" | "medium" | "large";
}

const buttonVariants = {
  primary: css`
    background-color: #007bff;
    color: white;
    border: none;

    &:hover {
      background-color: #0056b3;
      cursor: pointer;
    }
  `,
  secondary: css`
    background-color: #6c757d;
    color: white;
    border: none;

    &:hover {
      background-color: #5a6268;
      cursor: pointer;
    }
  `,
  danger: css`
    background-color: #dc3545;
    color: white;
    border: none;

    &:hover {
      background-color: #bd2130;
      cursor: pointer;
    }
  `,
};

const buttonSizes = {
  small: css`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  `,
  medium: css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
  `,
  large: css`
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-block;
  font-family: inherit;
  font-weight: bold;
  text-align: center;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s, opacity 0.2s;

  ${({ $variant }) => buttonVariants[$variant]}
  ${({ size }) => buttonSizes[size]}

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;
