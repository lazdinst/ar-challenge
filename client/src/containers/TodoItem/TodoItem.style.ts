import styled from "styled-components";

export const TodoItemWrapper = styled.div<{ $completed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
  background-color: #333;
  color: #ededed;
  color: ${({ $completed }) => ($completed ? "#888" : "inherit")};
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};

  &:hover {
    border: 1px solid #fff;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
  }
`;

export const TodoItemDate = styled.div<{ $isOverDue: boolean }>`
  color: ${({ $isOverDue }) => ($isOverDue ? "red" : "inherit")};
  float: right;
`;

export const TodoContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    cursor: pointer;
    margin: 0;
  }

  p {
    margin: 0.25rem 0 0;
    font-size: 0.9rem;
  }
`;

export const TodoFooter = styled.div`
  float: right;
`;

export const TodoContent = styled.div`
  flex: 1;
  display: flex;
`;

export const TodoTitle = styled.h3`
  margin: 0;
  cursor: pointer;
`;
