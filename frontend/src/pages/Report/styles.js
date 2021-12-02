import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.primary.main,
    paddingLeft: "1rem",
  },
  heading2: {
    color: theme.palette.text.primary,
    margin: 0,
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    margin: "0 1rem",
  },
  p: {
    color: theme.palette.text.primary,
    margin: 0,
  },
}));

export default useStyles;
