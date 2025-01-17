export interface TodoItem {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  category: string;
  completed: boolean;
}

export interface TodoState {
  todos: TodoItem[];
  status: string;
}
