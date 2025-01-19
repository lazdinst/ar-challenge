import React from "react";
import { TodoItem as TodoType } from "../../redux/slices/todo/types";
import TodoItem from "./TodoItem";
import { TodoListWrapper, ControlsWrapper } from "./TodoList.style";
import Dropdown from "../../components/Dropdown";
import { filterOptions, sortOptions } from "../../constants";

interface TodoListProps {
  todos: TodoType[];
  onFilterChange: (filter: "all" | "active" | "completed") => void;
  onSortChange: (sortOrder: "dueDate" | "creationDate") => void;
  currentFilter: "all" | "active" | "completed";
  currentSortOrder: "dueDate" | "creationDate";
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onFilterChange,
  onSortChange,
  currentFilter,
  currentSortOrder,
}) => {
  return (
    <TodoListWrapper>
      <h2>Your Todos</h2>
      <ControlsWrapper>
        <div>
          <label>Filter:</label>
          <Dropdown
            options={filterOptions}
            value={currentFilter}
            onChange={(e) =>
              onFilterChange(e.target.value as "all" | "active" | "completed")
            }
          />
        </div>
        <div>
          <label>Sort by:</label>
          <Dropdown
            options={sortOptions}
            value={currentSortOrder}
            onChange={(e) =>
              onSortChange(e.target.value as "dueDate" | "creationDate")
            }
          />
        </div>
      </ControlsWrapper>
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p>No todos to display.</p>
      )}
    </TodoListWrapper>
  );
};

export default TodoList;
