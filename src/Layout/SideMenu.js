import React from "react";
import { useSelector } from "react-redux";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/display-name
export default () => {
  const { compact } = useSelector((state) => state.sidemenu);
  const [activeItem, setActiveItem] = React.useState("dashboard");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu fixed="left" compact={compact} vertical className="side">
      <Menu.Item
        as={Link}
        to={"/"}
        name="dashboard"
        active={activeItem === "dashboard"}
        onClick={handleItemClick}
        style={{ direction: "rtl" }}
      >
        {!compact && "داشبورد"}
        <Icon color={activeItem === "dashboard" && "teal"} name="home" />
      </Menu.Item>
      <Menu.Item
        as={Link}
        to={"/users"}
        name="users"
        active={activeItem === "so1"}
        onClick={handleItemClick}
      >
        <Icon name="find" color={activeItem === "so1" && "teal"} />
        {!compact && "منوی۱"}
      </Menu.Item>
      <Menu.Item
        // as={Link}
        to={"/o2"}
        name="o2"
        active={activeItem === "o2"}
        onClick={handleItemClick}
      >
        <Icon name="credit card" color={activeItem === "o2" && "teal"} />
        {!compact && "منوی۲"}
      </Menu.Item>
    </Menu>
  );
};
