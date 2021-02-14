import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const card = () => {
  return (
    <div>
      <Card>
        <CardMedia />
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Memory 1
          </Typography>
          <Typography variant="h5" component="h2">
            PHOTO HERE
          </Typography>
          <Typography color="textSecondary">Awesome memory</Typography>
          <Typography variant="body2" component="p">
            This was when I got a black eye
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default card;
