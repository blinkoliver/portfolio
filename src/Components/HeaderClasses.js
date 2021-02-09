import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "fixed",
    height: "10vh",
    minHeight: "80px",
    width: "100%",
    backgroundSize: "cover !important",
    textAlign: "center",
    overflow: "hidden",
  },
  nav: {
    display: "flex",
    margin: 0,
    padding: 0,
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  menuItem: {
    listStyleType: "none",
    padding: "1em",
  },
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));
export default useStyles;
