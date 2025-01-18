import React from "react";
import { StyledCheckbox, Label } from "./Checkbox.style";

interface CheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <Label>
      <StyledCheckbox type="checkbox" checked={checked} onChange={onChange} />
      {label && <span>{label}</span>}
    </Label>
  );
};

export default Checkbox;
