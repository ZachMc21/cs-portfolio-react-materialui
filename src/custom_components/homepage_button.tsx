import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

export const HomepageButton = styled(MuiButton)(( text ) => ({
    padding: 4,
    fontSize: "medium",
    ':hover': {
        fontSize: "large",
        borderColor: "primary.dark"
    },
}));

export default HomepageButton;