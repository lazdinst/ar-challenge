import React from "react";
import { StyledCard, CardHeader, CardBody, CardFooter } from "./Card.style";

interface CardProps {
  title?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, footer, children }) => {
  return (
    <StyledCard>
      {title && <CardHeader>{title}</CardHeader>}
      <CardBody>{children}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </StyledCard>
  );
};

export default Card;
