import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: "1",
      name: "Laptop",
      quantity: 15,
      category: "Electronics",
      supplier: "Supplier A",
    },
    {
      id: "2",
      name: "T-shirt",
      quantity: 50,
      category: "Clothing",
      supplier: "Supplier B",
    },
    {
      id: "3",
      name: "Apple",
      quantity: 100,
      category: "Food",
      supplier: "Supplier C",
    },
    {
      id: "4",
      name: "Novel",
      quantity: 20,
      category: "Books",
      supplier: "Supplier D",
    },
  ],
  categories: ["Electronics", "Clothing", "Food", "Books"],
  filteredItems: [],
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.filteredItems = state.items;
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
        state.filteredItems = state.items;
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.filteredItems = state.items;
    },
    setFilteredItems: (state, action) => {
      state.filteredItems = action.payload;
    },
  },
});

export const { addItem, updateItem, deleteItem, setFilteredItems } =
  inventorySlice.actions;

export default inventorySlice.reducer;
