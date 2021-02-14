import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Header</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default header;
