import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
//import StyledDoubleArrowIcon from "../custom_components/double_arrow_icon";

export const HomepageButton = styled(MuiButton)(( ) => ({
    flexDirection: "column",
    justifyContent: "flex-start",
    size: "large",
    padding: "extra-large",
    margin: "medium",
    fontSize: "medium",
    "& :hover": {
        ['${StyledDoubleArrowIcon}']: {
            size: "extra-large"
        }
    }
}));

export default HomepageButton;