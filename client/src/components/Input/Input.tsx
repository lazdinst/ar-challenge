import React from "react";
import { StyledInput, StyledLabel, InputWrapper } from "./Input.style";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "email" | "number" | "password" | "date" | "color";
  label?: string;
  id?: string;
  error?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  label,
  id,
  error = false,
  onBlur,
}) => {
  return (
    <InputWrapper>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <StyledInput
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        $error={error}
      />
    </InputWrapper>
  );
};

export default Input;
