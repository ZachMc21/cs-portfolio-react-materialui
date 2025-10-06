import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

export const HomepageButton = styled(MuiButton)(( ) => ({
    flexDirection: "column",
    justifyContent: "flex-start",
    size: "large",
    padding: "extra-large",
    margin: "medium",
    fontSize: "medium",
    ':hover': {
        fontSize: "large",
        padding: "large"
    },
}));

export default HomepageButton;