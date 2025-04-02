import {createSlice} from '@reduxjs/toolkit';

interface CategoriesState {
  categoriesData: string[];
  error: string;
  loading: boolean;
}

const initialState: CategoriesState = {
  categoriesData: [],
  error: '',
  loading: false,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export const {} = categoriesSlice.actions;

export default categoriesSlice.reducer;
