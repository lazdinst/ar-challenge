export interface TodoItemType {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  category: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TodoState {
  todos: TodoItemType[];
  status: string;
  error: string | null;
  loading: { [id: string]: boolean };
}
