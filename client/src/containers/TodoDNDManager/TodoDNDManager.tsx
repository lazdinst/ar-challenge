import React, { useState, useEffect } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { fetchTodosThunk, updateTodoThunk } from "../../redux/slices/todo";
import { useFilteredTodos } from "./hooks/useFilteredTodos";
import { useSortedTodos } from "./hooks/useSortedTodos";
import { RootState } from "../../redux/store";
import TodoItem from "../TodoItem";
import { CategoriesWrapper, CategoryColumn } from "./TodoDNDManager.style";
import { TodoItemType } from "../../redux/slices/todo/types";
const TodoDNDManager: React.FC = () => {
  const dispatch = useAppDispatch();

  const todos = useSelector((state: RootState) => state.todo.todos);
  const categories = useSelector(
    (state: RootState) => state.category.categories
  );

  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [sortOrder, setSortOrder] = useState<"dueDate" | "creationDate">(
    "dueDate"
  );
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);

  const filteredTodos = useFilteredTodos(todos, filter);
  const sortedTodos = useSortedTodos(filteredTodos, sortOrder, sortDirection);

  const groupedTodos = categories.reduce<Record<string, TodoItemType[]>>(
    (acc, category) => {
      acc[category.name] = sortedTodos.filter(
        (todo) => todo.category === category.name
      );
      return acc;
    },
    { Uncategorized: sortedTodos.filter((todo) => !todo.category) }
  );

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

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <CategoriesWrapper>
        {Object.entries(groupedTodos).map(([category, todos]) => (
          <Droppable key={category} droppableId={category}>
            {(provided) => (
              <CategoryColumn
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2>{category}</h2>
                {todos.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
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
            )}
          </Droppable>
        ))}
      </CategoriesWrapper>
    </DragDropContext>
  );
};

export default TodoDNDManager;
