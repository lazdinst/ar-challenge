import { useAppDispatch } from "../../../redux/store";
import { createTodoThunk } from "../../../redux/slices/todo";

interface UseHandleSubmitParams {
  validateFields: (fields: {
    title: string;
    description: string;
    dueDate: string;
    category: string;
  }) => boolean;
  resetForm: () => void;
}

export const useHandleSubmit = ({
  validateFields,
  resetForm,
}: UseHandleSubmitParams) => {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    e: React.FormEvent,
    fields: {
      title: string;
      description: string;
      dueDate: string;
      category: string;
    }
  ) => {
    e.preventDefault();

    // Use the validateFields passed as a parameter
    if (!validateFields(fields)) {
      return;
    }

    dispatch(
      createTodoThunk({
        id: "",
        title: fields.title,
        description: fields.description,
        dueDate: fields.dueDate,
        category: fields.category,
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
    );

    resetForm();
  };

  return { handleSubmit };
};
