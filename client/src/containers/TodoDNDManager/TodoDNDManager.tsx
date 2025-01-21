import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { updateTodoThunk } from "../../redux/slices/todo";
import {
  CategoryTitle,
  CategoriesWrapper,
  CategoryColumn,
  CategoryColumnWrapper,
} from "./TodoDNDManager.style";
import { TodoItemType } from "../../redux/slices/todo/types";
import TodoItem from "../TodoItem";

interface TodoDNDManagerProps {
  groupedTodos: Record<string, TodoItemType[]>;
}

const TodoDNDManager: React.FC<TodoDNDManagerProps> = ({ groupedTodos }) => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todo.todos);
  const categories = useAppSelector((state) => state.category.categories);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination || source.droppableId === destination.droppableId) return;

    const newCategory = destination.droppableId;
    const todo = todos.find((todo) => todo.id === draggableId);

    if (!todo) {
      console.error("Todo not found for ID:", draggableId);
      return;
    }
    const updatedTodo = { ...todo, category: newCategory };
    dispatch(updateTodoThunk(updatedTodo));
  };

  const getCategoryNameById = React.useCallback(
    (id: string) => {
      const category = categories.find((cat) => cat.id === id);
      return category ? category.name : "Unknown Category";
    },
    [categories]
  );

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <CategoriesWrapper>
        {Object.entries(groupedTodos).map(([category, todoList]) => (
          <Droppable key={category} droppableId={category}>
            {(provided) => (
              <CategoryColumnWrapper>
                <CategoryTitle>{getCategoryNameById(category)}</CategoryTitle>
                <CategoryColumn
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {todoList.map((todo, index) => (
                    <Draggable
                      key={todo.id}
                      draggableId={todo.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TodoItem todo={todo} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </CategoryColumn>
              </CategoryColumnWrapper>
            )}
          </Droppable>
        ))}
      </CategoriesWrapper>
    </DragDropContext>
  );
};

export default TodoDNDManager;
