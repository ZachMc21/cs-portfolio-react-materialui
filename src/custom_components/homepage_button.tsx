import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
//import StyledDoubleArrowIcon from "../custom_components/double_arrow_icon";

export const HomepageButton = styled(MuiButton)(( ) => ({
    padding: 36,
    flexDirection: "column",
    justifyContent: "flex-start",
    fontSize: "large",
    "&:hover": { transform: "scale3d(1.075, 1.075, 1)" },
    /*"&:hover": {
        "&.expand_on_hover": {
            fontSize: "large",
            ['${StyledDoubleArrowIcon}']: {
                fontSize: "large"
            }
        }
    }*/
}));

export default HomepageButton;