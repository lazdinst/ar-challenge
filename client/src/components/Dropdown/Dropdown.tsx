import React from "react";
import { StyledSelect, StyledOption } from "./Dropdown.style";

interface DropdownProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  error?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder,
  error = false,
}) => {
  return (
    <StyledSelect value={value} onChange={onChange} error={error}>
      {placeholder && <StyledOption value="">{placeholder}</StyledOption>}
      {options.map((option) => (
        <StyledOption key={option.value} value={option.value}>
          {option.label}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
