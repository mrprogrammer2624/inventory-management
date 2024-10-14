import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Form, Input, InputNumber, Select, Button, Spin } from "antd";
import { useInventory } from "@/hooks/useInventory";
import { Container } from "@/components";

const { Option } = Select;

export const InventoryItemForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const {
    items,
    categories = [],
    suppliers = [],
  } = useSelector((state) => state.inventory);
  const { addItem, updateItem } = useInventory();

  useEffect(() => {
    if (id) {
      const item = items.find((item) => item.id === id);
      if (item) {
        form.setFieldsValue(item);
      }
    }
  }, [id, items, form]);

  const onFinish = (values) => {
    if (id) {
      updateItem(id, values);
    } else {
      addItem(values);
    }
    navigate("/");
  };

  if (!categories.length || !suppliers.length) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Spin tip="Loading..." size="large" />
      </div>
    );
  }

  return (
    <Container>
      <h1 className="text-2xl mb-4">{id ? "Edit Item" : "Add New Item"}</h1>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name="name"
          label="Item Name"
          rules={[{ required: true, message: "Please input the item name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[{ required: true, message: "Please input the quantity!" }]}
        >
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please select a category!" }]}
        >
          <Select>
            {categories?.map((category) => (
              <Option key={category} value={category}>
                {category}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="supplier"
          label="Supplier"
          rules={[{ required: true, message: "Please select a supplier!" }]}
        >
          <Select>
            {suppliers?.map((supplier) => (
              <Option key={supplier.id} value={supplier.id}>
                {supplier.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {id ? "Update Item" : "Add Item"}
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};
