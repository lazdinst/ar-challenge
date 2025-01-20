// DEPRECATED
import React from "react";
import { TodoItemType } from "../../redux/slices/todo/types";
import TodoItem from "../TodoItem";
import { TodoListWrapper, ControlsWrapper } from "./TodoList.style";
import { filterOptions, sortOptions } from "../../constants";
import { Button, Icon, Dropdown } from "../../components";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface TodoListProps {
  todos: TodoItemType[];
  onFilterChange: (filter: "all" | "active" | "completed") => void;
  onSortChange: (sortOrder: "dueDate" | "creationDate") => void;
  onSortDirectionChange: (direction: "asc" | "desc") => void;
  currentFilter: "all" | "active" | "completed";
  currentSortOrder: "dueDate" | "creationDate";
  sortDirection: "asc" | "desc";
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onFilterChange,
  onSortChange,
  onSortDirectionChange,
  currentFilter,
  currentSortOrder,
  sortDirection,
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
          <Button
            onClick={() =>
              onSortDirectionChange(sortDirection === "asc" ? "desc" : "asc")
            }
            content={
              <Icon
                icon={sortDirection === "asc" ? faChevronUp : faChevronDown}
              />
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
