import styled from "styled-components";

export const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
  background-color: #333;
  color: #ededed;

  &.completed {
    text-decoration: line-through;
    color: #888;
  }
`;

export const CheckboxWrapper = styled.div`
  margin-right: 1rem;

  input[type="checkbox"] {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const TodoContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
  }

  p {
    margin: 0.25rem 0 0;
    font-size: 0.9rem;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
  }
`;
