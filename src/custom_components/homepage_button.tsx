import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
//import StyledDoubleArrowIcon from "../custom_components/double_arrow_icon";

export const HomepageButton = styled(MuiButton)(( ) => ({
    padding: '2rem',
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "large",
    width: '100%',
    height: "8rem",
    "&:hover": { transform: "scale3d(1.06, 1.06, 1)" },
}));

export default HomepageButton;