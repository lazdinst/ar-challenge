import React from "react";
import ModalContainer from "../ModalContainer";
import EditTodoContainer from "../EditTodoContainer";

const EditTodoModal: React.FC<{ todoId: string }> = ({ todoId }) => {
  return (
    <ModalContainer modalId={`editTodo-${todoId}`}>
      <EditTodoContainer id={todoId} />
    </ModalContainer>
  );
};

export default EditTodoModal;
