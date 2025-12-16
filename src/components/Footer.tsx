import Box from "@mui/material/Box";

const currentDate = new Date();


const Footer = () => {
	return (
		<Box id="footer-copyright" sx={{ psition: "absolute", mx: 0, mb: 0, fontSize: "0.75rem" }}>
			<p>© {currentDate.getFullYear()} Zach Magloughlin. All rights reserved.</p>
		</Box>
	)
}

export default Footer;
