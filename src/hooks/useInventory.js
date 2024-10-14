import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addItem, deleteItem, setFilteredItems, updateItem } from "@/slices/inventorySlice";

export const useInventory = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.inventory);

  const addNewItem = (item) => {
    dispatch(addItem({ ...item, id: uuidv4() }));
  };

  const updateExistingItem = (id, item) => {
    dispatch(updateItem({ ...item, id }));
  };

  const deleteExistingItem = (id) => {
    dispatch(deleteItem(id));
  };

  const searchItems = (searchTerm) => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    dispatch(setFilteredItems(filtered));
  };

  const filterItems = (filterType, filterValue) => {
    const filtered = items.filter((item) => item[filterType] === filterValue);
    dispatch(setFilteredItems(filtered));
  };

  return {
    addItem: addNewItem,
    updateItem: updateExistingItem,
    deleteItem: deleteExistingItem,
    searchItems,
    filterItems,
  };
};
