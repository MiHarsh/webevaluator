import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    background: "#5B44BA",
    color: "white",
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  copyright: {
    padding: "25px",
  },
  copy_text: {
    fontSize: "15px",
    marginBottom: "10px",
  },
  footer_links: {
    padding: "25px",
    paddingLeft: "250px",
  },
  footer_span: {
    fontSize: "15px",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "10px",
  },
  anchor: {
    color: "white",
    textDecoration: "none",
  },
});

export default useStyles;
