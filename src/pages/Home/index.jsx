import { useSelector } from "react-redux";
import { Table, Input, Select, Tag } from "antd";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Container } from "@/components";
import { useInventory } from "@/hooks/useInventory";
import { useState, useEffect } from "react";

const { Search } = Input;
const { Option } = Select;

export const Home = () => {
  const { items, categories, suppliers } = useSelector(
    (state) => state.inventory
  );
  const { deleteItem, searchItems } = useInventory();

  // Initialize states with "All"
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSupplier, setSelectedSupplier] = useState("All");
  const [filteredItems, setFilteredItems] = useState(items);

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Quantity", dataIndex: "quantity", key: "quantity" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Supplier", dataIndex: "supplier", key: "supplier" },
    {
      title: "Stock Level",
      dataIndex: "quantity",
      key: "stockLevel",
      render: (quantity) => (
        <Tag color={quantity > 10 ? "green" : "red"}>
          {quantity > 10 ? "Sufficient" : "Low"}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Link to={`/edit-item/${record.id}`}>
            <EditOutlined className="mr-2" />
          </Link>
          <DeleteOutlined
            onClick={() => deleteItem(record.id)}
            className="text-red-500"
          />
        </>
      ),
    },
  ];

  useEffect(() => {
    let newFilteredItems = items;

    if (selectedCategory !== "All") {
      newFilteredItems = newFilteredItems.filter(
        (item) => item.category === selectedCategory
      );
    }

    if (selectedSupplier !== "All") {
      newFilteredItems = newFilteredItems.filter(
        (item) => item.supplier === selectedSupplier
      );
    }

    setFilteredItems(newFilteredItems);
  }, [items, selectedCategory, selectedSupplier]);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleSupplierChange = (value) => {
    setSelectedSupplier(value);
  };

  return (
    <Container>
      <h1 className="text-2xl mb-4">Inventory Dashboard</h1>
      <div className="mb-4 flex space-x-4">
        <Search
          placeholder="Search items"
          onSearch={searchItems}
          className="w-64"
        />
        <Select
          value={selectedCategory}
          placeholder="Filter by category"
          onChange={handleCategoryChange}
          className="w-48"
        >
          <Option value="All">All</Option>
          {categories?.map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
        <Select
          value={selectedSupplier}
          placeholder="Filter by supplier"
          onChange={handleSupplierChange}
          className="w-48"
        >
          <Option value="All">All</Option>
          {suppliers?.map((supplier) => (
            <Option key={supplier.id} value={supplier.id}>
              {supplier.name}
            </Option>
          ))}
        </Select>
      </div>
      <Table columns={columns} dataSource={filteredItems} rowKey="id" />
    </Container>
  );
};
