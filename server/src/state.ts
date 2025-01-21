import { Todo } from "./models/todo.model";
import { Category } from "./models/category.model";
import { initialCategories } from "./services/categories.defaults";
export const categories: Category[] = [...initialCategories];

import { initialTodos } from "./services/todos.defaults";
export const todos: Todo[] = [...initialTodos];
