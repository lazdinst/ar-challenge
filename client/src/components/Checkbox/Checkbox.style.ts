import styled from "styled-components";

export const StyledCheckbox = styled.input`
  margin-right: 0.5rem;
  width: 16px;
  height: 16px;
  accent-color: #007bff;
  cursor: pointer;

  &:disabled {
    accent-color: #dcdcdc;
    cursor: not-allowed;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;

  span {
    margin-left: 0.5rem;
  }
`;
