import React from "react";
import { StyledSelect, StyledOption, StyledLabel } from "./Dropdown.style";

interface DropdownProps {
  label?: string;
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
  label,
}) => {
  return (
    <>
      {label && <StyledLabel htmlFor={label}>{label}</StyledLabel>}
      <StyledSelect value={value} onChange={onChange} $error={error}>
        {placeholder && <StyledOption value="">{placeholder}</StyledOption>}
        {options.map((option) => (
          <StyledOption key={option.value} value={option.value}>
            {option.label}
          </StyledOption>
        ))}
      </StyledSelect>
    </>
  );
};

export default Dropdown;
