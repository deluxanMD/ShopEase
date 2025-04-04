import {createSlice} from '@reduxjs/toolkit';

interface CategoriesState {
  categoriesData: string[];
}

const initialState: CategoriesState = {
  categoriesData: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export const {} = categoriesSlice.actions;

export default categoriesSlice.reducer;
