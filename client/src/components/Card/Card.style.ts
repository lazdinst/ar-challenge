import styled from "styled-components";

export const StyledCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: white;
  margin: 1rem;
`;

export const CardHeader = styled.div`
  background-color: #f5f5f5;
  padding: 0.75rem 1rem;
  font-weight: bold;
  font-size: 1.125rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const CardBody = styled.div`
  padding: 1rem;
  font-size: 1rem;
`;

export const CardFooter = styled.div`
  background-color: #f9f9f9;
  padding: 0.75rem 1rem;
  border-top: 1px solid #e0e0e0;
  text-align: right;
`;
