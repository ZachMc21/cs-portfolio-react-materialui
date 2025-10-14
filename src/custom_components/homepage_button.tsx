import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import homepageTheme from "../theme";

export const HomepageButton = styled(MuiButton)(({ }) => ({
    color: homepageTheme.palette.primary.dark,
    backgroundColor: homepageTheme.palette.primary.light,
    padding: '2rem',
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "large",
    width: '100%',
    height: "8rem",
    "&:hover": { transform: "scale3d(1.06, 1.06, 1)" },
}));

export default HomepageButton;