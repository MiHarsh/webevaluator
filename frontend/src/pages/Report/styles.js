import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem 0 5rem 0",
  },
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
    margin: "1rem",
  },
  p: {
    color: theme.palette.text.primary,
    margin: 0,
    cursor: "pointer",
    display: "block",
    fontSize: "1.5em",
  },
  button_div: {
    marginTop: "40px",
    marginBottom: "40px",
    textAlign: "center",
  },
}));

export default useStyles;
