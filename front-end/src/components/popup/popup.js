import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { TextField, Typography, Button, Grid } from "@material-ui/core";
import FileBase from "react-file-base64";
import { createPost } from "../../api/index";
import axios from "axios";

const Popup = ({ open, setOpen }) => {
  const [postData, setPostData] = useState({
    description: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/posts")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Dialog open={open} onClose={() => setOpen(!open)}>
      <DialogTitle>
        <Typography>Add Memory</Typography>
      </DialogTitle>
      <DialogContent>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <FileBase
                type="file"
                multiple={false}
                onDone={(base64) =>
                  setPostData({ ...postData, selectedFile: base64 })
                }
              />
            </Grid>
            <Grid item>
              <TextField
                label="Description"
                multiline
                rows={3}
                variant="outlined"
                value={postData.description}
                onChange={(e) =>
                  setPostData({ ...postData, description: e.target.value })
                }
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
