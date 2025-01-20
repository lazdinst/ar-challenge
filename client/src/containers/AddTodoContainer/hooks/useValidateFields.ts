import { useState } from "react";

interface FieldErrors {
  title: boolean;
  description: boolean;
  dueDate: boolean;
  category: boolean;
}

export const useValidateFields = () => {
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    title: false,
    description: false,
    dueDate: false,
    category: false,
  });

  const validateFields = ({
    title,
    description,
    dueDate,
    category,
  }: {
    title: string;
    description: string;
    dueDate: string;
    category: string;
  }): boolean => {
    const errors = {
      title: !title,
      description: !description,
      dueDate: !dueDate,
      category: !category,
    };
    setFieldErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  return { fieldErrors, validateFields };
};
