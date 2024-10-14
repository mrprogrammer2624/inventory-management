import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  suppliers: [],
};

const supplierSlice = createSlice({
  name: "suppliers",
  initialState,
  reducers: {
    addSupplier: (state, action) => {
      state.suppliers.push({ id: Date.now().toString(), ...action.payload });
    },
    updateSupplier: (state, action) => {
      const index = state.suppliers.findIndex(
        (s) => s.id === action.payload.id
      );
      if (index !== -1) {
        state.suppliers[index] = action.payload;
      }
    },
    deleteSupplier: (state, action) => {
      state.suppliers = state.suppliers.filter((s) => s.id !== action.payload);
    },
  },
});

export const { addSupplier, updateSupplier, deleteSupplier } =
  supplierSlice.actions;
export default supplierSlice.reducer;
