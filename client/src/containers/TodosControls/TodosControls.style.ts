import styled from "styled-components";

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem 0rem;
  border-bottom: 1px solid #ededed;
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  label {
    font-weight: bold;
  }
`;

export const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;

  label {
    font-weight: bold;
  }

  button {
    margin-left: 0.5rem;
  }
`;
