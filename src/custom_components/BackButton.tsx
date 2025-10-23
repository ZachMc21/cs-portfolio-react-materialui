import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

export const BackButton = styled(MuiButton)(({ }) => ({
    padding: '2rem',
    flexDirection: "column",
    justifyContent: "center",
    margin: "1rem",
    "&:hover": { transform: "scale3d(1.1, 1.1, 1)" },
}));

export default BackButton;