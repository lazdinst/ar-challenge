export interface TodoItem {
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
  todos: TodoItem[];
  status: string;
  error: string | null;
  loading: { [id: string]: boolean };
}
