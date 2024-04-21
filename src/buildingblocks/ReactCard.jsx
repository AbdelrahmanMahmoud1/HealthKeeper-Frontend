import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (name, description, date) => {
  return (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Name: {name}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 12 }} color="text.secondary">
          Description: {description}
        </Typography>
        <Typography variant="body2">Diagnosed in: {date}</Typography>
      </CardContent>
    </React.Fragment>
  );
};

export default function ReactCard(props) {
  return (
    <Box sx={{ minWidth: 300, position: "relative" }}>
      <Card variant="">{card(props.name, props.description, props.date)}</Card>
      <div onClick={() => {
        props.deleteFun(props.id)
        props.reload();
        console.log("deleted");
      }}>
        {props.editable && <DeleteOutlineSharpIcon
          sx={{
            transform: "scale(1.5)",
            position: "absolute",
            margin: "2rem",
            top: 0,
            right: 0,
            cursor: "pointer",
          }}
        />}
      </div>

    </Box>
  );
}
