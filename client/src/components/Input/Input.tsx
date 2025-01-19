import React from "react";
import { StyledInput, StyledLabel, InputWrapper } from "./Input.style";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "email" | "number" | "password" | "date" | "color";
  label?: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  label,
  id,
}) => {
  return (
    <InputWrapper>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <StyledInput
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default Input;
