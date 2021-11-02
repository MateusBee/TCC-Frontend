import tooltipStyle from "assets/jss/material/tooltipStyle.js";
import actionsStyle from "assets/jss/material/actionsStyle.js";
import searchStyle from "assets/jss/material/searchStyle.js";
    
const medicationStyle = () => ({
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
  },
});

export default medicationStyle;
  