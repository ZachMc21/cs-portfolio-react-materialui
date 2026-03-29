import Box from "@mui/material/Box";
import "./footer.css";

const currentDate = new Date();

const Footer = () => {
	return (
		<Box id="footer-copyright">
			<p className="footer">© {currentDate.getFullYear()} Zach Magloughlin. All rights reserved.</p>
		</Box>
	)
}

export default Footer;
