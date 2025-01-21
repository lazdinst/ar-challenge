import styled from "styled-components";

export const CategoryInputWrapper = styled.div<{ $error: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    border: 1px solid ${({ $error }) => ($error ? "red" : "transparent")};
    border-radius: 4px;
    padding: 0.5rem;
    background-color: transparent;
    font-size: 1.25rem;
  }
  button {
    display: none;
    margin-left: 0.5rem;
    margin-bottom: 1rem;
  }
  &:hover {
    button {
      display: flex;
    }
  }
`;
