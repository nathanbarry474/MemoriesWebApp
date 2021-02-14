import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Card from "../components/card/card";
import Popup from "../components/popup/popup";

const MemoriesPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <Card />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card />
              </Grid>
            </Grid>
            <Grid item>
              <Button
                onClick={() => setOpen(!open)}
                variant="contained"
                color="primary"
              >
                Add Memory
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
      <Popup open={open} setOpen={setOpen} />
    </>
  );
};

export default MemoriesPage;
