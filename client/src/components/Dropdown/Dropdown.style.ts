import styled from "styled-components";

export const StyledSelect = styled.select<{ $error: boolean }>`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-color: ${({ $error }) => ($error ? "red" : "#ccc")};
  border-radius: 4px;
  background-color: #000;
  color: #ededed;
  cursor: pointer;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const StyledOption = styled.option`
  padding: 0.5rem;
  font-size: 1rem;
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #ededed;
`;
