import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import homepageTheme from "../themes/theme-home";

export const HomepageButton = styled(MuiButton)(({ }) => ({
	color: homepageTheme.palette.primary.dark, /* Teal */
	backgroundColor: homepageTheme.palette.primary.light, /* Light turquoise */
	padding: '2rem',
	flexDirection: "column",
	justifyContent: "center",
	height: "8rem",
	margin: "1rem",
	"&:hover": { transform: "scale3d(1.06, 1.06, 1)" },
}));

export default HomepageButton;