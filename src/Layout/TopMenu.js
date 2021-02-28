import React from "react";
import { Grid, Image, Menu, Icon, Input } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { search, toggleSCompactSideBar } from "../redux/actions";
// eslint-disable-next-line react/display-name
export default () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = React.useState(false);
  return (
    <>
      <Grid.Column only="computer tablet">
        <Menu fixed="top" className="topmenu">
          <Menu.Item onClick={() => dispatch(toggleSCompactSideBar())}>
            <Icon name="bars" />
          </Menu.Item>
          <Menu.Item>
            <Image src="./images/logo.png" size="tiny" />
          </Menu.Item>
          <Menu.Item name="o1">گزینه۱</Menu.Item>
          <Menu.Item name="o2">گزینه ۲</Menu.Item>
          <Menu.Item name="o3">گزینه ۳</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item className="no-border" position="right">
              <Input
                transparent
                className="prompt"
                type="text"
                placeholder="جستجو..."
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <i
                className="search link icon"
                onClick={() => searchValue && dispatch(search(searchValue))}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Grid.Column>
      <Grid.Column only="mobile">
        <Menu fixed="top" className="topmenu">
          <Menu.Item>
            <Icon name="bars" />
          </Menu.Item>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src="./images/logo.png" size="tiny" />
          </div>
          <Menu.Menu position="right">
            <Menu.Item>
              <Icon name="microchip" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Grid.Column>
    </>
  );
};
