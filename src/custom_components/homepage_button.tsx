import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
//import StyledDoubleArrowIcon from "../custom_components/double_arrow_icon";

export const HomepageButton = styled(MuiButton)(( ) => ({
    m: 2,
    flexDirection: "column",
    justifyContent: "flex-start",
    fontSize: "medium",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
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