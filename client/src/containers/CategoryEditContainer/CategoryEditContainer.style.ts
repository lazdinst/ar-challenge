import styled from "styled-components";

export const CategoryInputWrapper = styled.div<{ $error: boolean }>`
  input {
    border: 1px solid ${({ $error }) => ($error ? "red" : "transparent")};
    border-radius: 4px;
    padding: 0.5rem;
    background-color: transparent;
    font-size: 1.25rem;
  }
`;
