import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";

import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";

// eslint-disable-next-line react/display-name
export default (props) => {
  const { compact } = useSelector((state) => state.sidemenu);
  return (
    <Grid>
      <Grid.Row columns={1}>
        <TopMenu />
      </Grid.Row>
      <Grid.Row columns={2} only="computer">
        <div className="parent">
          <div className={compact ? "small-side side" : "side"}>
            <SideMenu />
          </div>
          <div
            className={
              compact ? "small-content content-container" : "content-container"
            }
          >
            {props.children}
          </div>
        </div>
        <SideMenu />
      </Grid.Row>
    </Grid>
  );
};
