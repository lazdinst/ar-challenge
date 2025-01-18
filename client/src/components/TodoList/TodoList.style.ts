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

export const TodoItemWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  background-color: #f9f9f9;

  h3 {
    margin: 0 0 0.5rem;
  }

  p {
    margin: 0.25rem 0;
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
