import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  overflow-x: auto;
  background-color: #f7f7f7;
`;

export const CategoryColumn = styled.div`
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  h2 {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.25rem;
    font-weight: bold;
  }

  &.dragging-over {
    background-color: #e0f7fa;
  }
`;

export const TodoItemWrapper = styled.div`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fafafa;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  }

  &.dragging {
    background-color: #f1f1f1;
    border-color: #bbb;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const PlaceholderWrapper = styled.div`
  height: 2rem;
  background-color: #eaeaea;
  border: 1px dashed #ccc;
  border-radius: 4px;
`;
