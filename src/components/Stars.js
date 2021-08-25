import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const labels = {
  0.5: "Don't waste your time",
  1: "Awful",
  1.5: "Bad",
  2: "Deficient",
  2.5: "Could be better",
  3: "Ok",
  3.5: "Good",
  4: "Great",
  4.5: "Excellent",
  5: "Excellent++",
};

const useStyles = makeStyles({
  root: {
    width: 300,
    display: "grid",
    alignItems: "center",
    fontSize: "20px",
  },
});

export default function HoverRating({ value, setValue }) {
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </div>
  );
}
