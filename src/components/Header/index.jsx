import { Menu } from "antd";
import { HomeOutlined, InboxOutlined, TeamOutlined } from "@ant-design/icons";
import { Container } from "@/components/";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  let selectedKey = "";
  if (location.pathname === "/") {
    selectedKey = "/";
  } else if (location.pathname === "/add-item") {
    selectedKey = "add-item";
  } else if (location.pathname === "/suppliers") {
    selectedKey = "suppliers";
    // } else if (location.pathname === `/edit-item/`) {
    //   selectedKey = "add-item";
  }

  return (
    <header>
      <Container>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]}>
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="add-item" icon={<InboxOutlined />}>
            <Link to="/add-item">Add Item</Link>
          </Menu.Item>
          <Menu.Item key="suppliers" icon={<TeamOutlined />}>
            <Link to="/suppliers">Suppliers</Link>
          </Menu.Item>
        </Menu>
      </Container>
    </header>
  );
};
