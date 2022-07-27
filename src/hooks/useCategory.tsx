import { useState, useEffect } from 'react';
import { CategoriesApi, Category } from 'src/types/mock-api';

const categoriesApi = new CategoriesApi();

export const useCategory = (categoryId: string) => {
  const [category, setCategory] = useState<Category>();
  useEffect(() => {
    categoriesApi.getCategory().then((res) => {
      const c = res.data.find((e) => e.id === categoryId);
      if (c) setCategory(c);
    });
  }, [categoryId]);
  return category;
};
