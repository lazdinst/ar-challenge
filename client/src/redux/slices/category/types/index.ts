export interface Category {
  id: string;
  name: string;
  color?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryState {
  categories: Category[];
  loading: {
    fetchCategories: boolean;
    createCategory: boolean;
    updateCategory: boolean;
    deleteCategory: boolean;
  };
  error: string | null;
}
