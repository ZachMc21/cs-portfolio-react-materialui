import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

export const HomepageButton = styled(MuiButton)(( ) => ({
    flexDirection: "column",
    justifyContent: "flex-start",
    size: "large",
    fontSize: "medium",
    ':hover': {
        fontSize: "large"
    },
}));

export default HomepageButton;