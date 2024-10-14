import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "@/slices/inventorySlice";
import suppliersReducer from "@/slices/suppliersSlice";

const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    suppliers: suppliersReducer,
  },
});

export default store;
