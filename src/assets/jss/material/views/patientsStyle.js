import { grayColor } from "assets/jss/globalMaterial.js";
import tooltipStyle from "assets/jss/material/tooltipStyle.js";
import actionsStyle from "assets/jss/material/actionsStyle.js";
import searchStyle from "assets/jss/material/searchStyle.js";
    
const patientsStyle = () => ({
  ...tooltipStyle,
  ...actionsStyle,
  ...searchStyle,
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  text: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
  },
  info: {
    marginLeft: "7px",
  },
  divider: {
    margin: "15px 0px",
  },
});

export default patientsStyle;
  