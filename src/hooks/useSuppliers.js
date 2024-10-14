import { addSupplier, deleteSupplier, updateSupplier } from "@/slices/suppliersSlice";
import { useDispatch } from "react-redux";

export const useSuppliers = () => {
  const dispatch = useDispatch();

  const addNewSupplier = (supplier) => {
    dispatch(addSupplier(supplier));
  };

  const updateExistingSupplier = (id, supplier) => {
    dispatch(updateSupplier({ id, ...supplier }));
  };

  const removeSupplier = (id) => {
    dispatch(deleteSupplier(id));
  };

  return {
    addSupplier: addNewSupplier,
    updateSupplier: updateExistingSupplier,
    deleteSupplier: removeSupplier,
  };
};
