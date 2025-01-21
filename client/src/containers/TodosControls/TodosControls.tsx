import React from "react";
import { Dropdown, Button, Icon } from "../../components";
import { filterOptions, sortOptions } from "../../constants";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  ControlsWrapper,
  FilterWrapper,
  SortWrapper,
} from "./TodosControls.style";

interface TodosControlsProps {
  onFilterChange: (filter: "all" | "active" | "completed") => void;
  onSortChange: (sortOrder: "dueDate" | "creationDate") => void;
  onSortDirectionChange: (direction: "asc" | "desc") => void;
  currentFilter: "all" | "active" | "completed";
  currentSortOrder: "dueDate" | "creationDate";
  sortDirection: "asc" | "desc";
}

const TodosControls: React.FC<TodosControlsProps> = ({
  onFilterChange,
  onSortChange,
  onSortDirectionChange,
  currentFilter,
  currentSortOrder,
  sortDirection,
}) => {
  return (
    <ControlsWrapper>
      <FilterWrapper>
        <Dropdown
          label="Filter"
          options={filterOptions}
          value={currentFilter}
          onChange={(e) =>
            onFilterChange(e.target.value as "all" | "active" | "completed")
          }
        />
      </FilterWrapper>
      <SortWrapper>
        <Dropdown
          label="Sort by"
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
        >
          <Icon icon={sortDirection === "asc" ? faChevronUp : faChevronDown} />
        </Button>
      </SortWrapper>
    </ControlsWrapper>
  );
};

export default TodosControls;
