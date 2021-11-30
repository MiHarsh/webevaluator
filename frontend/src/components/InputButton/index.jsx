import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import LanguageIcon from "@material-ui/icons/Language";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const InputButton = ({ value, handleChange, handleSubmit }) => {
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <LanguageIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="https://www.example.com"
        inputProps={{ "aria-label": "analyze website" }}
        value={value}
        onChange={handleChange}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        className={classes.iconButton}
        aria-label="search"
        onClick={handleSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default InputButton;
