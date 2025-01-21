import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #ededed;
`;

export const StyledInput = styled.input<{ $error: boolean }>`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-color: ${({ $error }) => ($error ? "red" : "#ccc")};
  border-radius: 4px;
  width: 100%;
  background-color: #000;
  color: #ededed;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &:disabled {
    background-color: #000;
    cursor: not-allowed;
  }
  &::placeholder {
    color: #ededed;
  }
`;
