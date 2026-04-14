import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import homeLight from "../../styles/homeLight";

export const HomepageButton = styled(MuiButton)(({ }) => ({
	color: homeLight.palette.primary.contrastText,
	backgroundColor: homeLight.palette.primary.main,
	padding: '2rem',
	flexDirection: "column",
	justifyContent: "center",
	height: "8rem",
	margin: "1rem",
	"&:hover": {
        transform: "scale3d(1.06, 1.06, 1)",
        backgroundColor: homeLight.palette.primary.dark,
    },
}));

export default HomepageButton;