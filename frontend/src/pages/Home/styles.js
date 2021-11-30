import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: "10vh",
    marginBottom: "3rem",
  },
  h5: {
    fontSize: "30px",
    color: "#5B44BA",
  },
  grid: {
    padding: "auto 20px",
  },
  grid_div: {
    background: "#5B44BA",
    borderRadius: "10px",
    boxSizing: "border-box",
    color: "white",
    outline: "none",
    padding: "20px",
    cursor: "pointer",
  },
  para_head: {
    fontSize: "20px",
    color: "#5B44BA",
    lineHeight: "25px",
    fontWeight: "bold",
  },
  para: {
    fontSize: "15px",
  },
  number_div: {
    display: "flex",
    textAlign: "center",
    margin: "auto",
  },
  number_para: {
    fontSize: "25px",
  },
  fixed_div: {
    margin: "auto",
    textAlign: "center",
  },
  paper: {
    margin: "auto",
    marginTop: "40vh",
    padding: "10px",
    background: "white",
    width: 400,
    border: "2px solid #000",
  },
});

export default useStyles;
