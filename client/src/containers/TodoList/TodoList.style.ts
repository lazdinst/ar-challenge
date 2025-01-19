import styled from "styled-components";

export const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FilterWrapper = styled.div`
  margin-bottom: 1rem;

  label {
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

export const SortWrapper = styled.div`
  margin-bottom: 1rem;

  label {
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  div {
    display: flex;
    align-items: center;

    label {
      margin-right: 0.5rem;
      font-weight: bold;
    }
  }
`;

export const TodoItemWrapper = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
  background-color: #333;
  color: #ededed;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;
