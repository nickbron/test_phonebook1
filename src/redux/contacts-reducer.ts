import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contacts {
name: string;}

const initialState = [] as Contacts[];

const reducerFilter = createSlice({
  name: "contacts", initialState,
  reducers: {
    filterItem: {
      reducer: (state, action: PayloadAction<Contacts>) => {
        state.push(action.payload);
      },
      prepare: (name: string) => ({
        payload: { name } as Contacts,
      }),
    },
  }
})

export const {  filterItem} = reducerFilter.actions;
export default reducerFilter.reducer;
