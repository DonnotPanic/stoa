import React from "react";

import Toc from "./toc";
import "./sidebar.styl";
import { observer } from "mobx-react-lite";

const Sidebar = observer(({ blogContainer }) => {
  return (
    <div className="sidebar">
      <span className="content">CONTENT</span>
      <Toc blogContainer={blogContainer} />
    </div>
  );
});

export default Sidebar;
