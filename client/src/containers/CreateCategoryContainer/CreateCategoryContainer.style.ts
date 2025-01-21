import styled from "styled-components";

export const CategoryCreateWrapper = styled.div<{ $error: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: left;

  input {
    border: 1px solid ${({ $error }) => ($error ? "red" : "transparent")};
    border-radius: 4px;
    padding: 0.5rem;
    background-color: transparent;
    font-size: 1.25rem;
  }
`;
