import { useState } from "react";
import { useSelector } from "react-redux";
import { Table, Button, Modal, Form, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSuppliers } from "@/hooks/useSuppliers";
import { Container } from "@/components";

export const SupplierManagement = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState(null);
  const { suppliers } = useSelector((state) => state.suppliers);
  const { addSupplier, updateSupplier, deleteSupplier } = useSuppliers();

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Contact", dataIndex: "contact", key: "contact" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <EditOutlined onClick={() => handleEdit(record)} className="mr-2" />
          <DeleteOutlined
            onClick={() => confirmDelete(record.id)}
            className="text-red-500"
          />
        </>
      ),
    },
  ];

  const handleEdit = (supplier) => {
    setEditingSupplier(supplier);
    form.setFieldsValue(supplier);
    setIsModalVisible(true);
  };

  const handleAdd = () => {
    setEditingSupplier(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (editingSupplier) {
        updateSupplier(editingSupplier.id, values);
      } else {
        addSupplier(values);
      }
      setIsModalVisible(false);
    });
  };

  const confirmDelete = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this supplier?",
      onOk: () => deleteSupplier(id),
    });
  };

  return (
    <Container>
      <h1 className="text-2xl mb-4">Supplier Management</h1>
      <Button onClick={handleAdd} type="primary" className="mb-4">
        Add Supplier
      </Button>
      <Table columns={columns} dataSource={suppliers} rowKey="id" />
      <Modal
        title={editingSupplier ? "Edit Supplier" : "Add Supplier"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Supplier Name"
            rules={[
              { required: true, message: "Please input the supplier name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="contact"
            label="Contact Details"
            rules={[
              { required: true, message: "Please input the contact details!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Container>
  );
};
