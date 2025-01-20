import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  height: 100%;
  padding: 0rem 0.25rem 1rem 0.25rem;
`;

export const CategoryColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow-y: auto;
`;

export const CategoryColumnWrapper = styled.div`
  min-width: 332px;
  display: flex;
  flex-direction: column;
`;

export const CategoryTitle = styled.h2``;
