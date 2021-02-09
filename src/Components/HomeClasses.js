import { makeStyles } from "@material-ui/core/styles";
import backgroundImg from "../assets/images/header-background.jpg";

const useStyles = makeStyles(() => ({
  home: {
    position: "absolute",
    height: "800px",
    minHeight: "500px",
    width: "100%",
    background: `url(${backgroundImg}) no-repeat top center`,
    backgroundSize: "cover",
    textAlign: "center",
    overflow: "hidden",
    paddingTop: "10vh",
  },
}));
export default useStyles;
