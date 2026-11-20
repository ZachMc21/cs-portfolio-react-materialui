import { Box } from "@mui/material";
import "../../styles/cs-portfolio/main.scss";
import "../../styles/footer.scss";
import { Link } from "react-router-dom";

const currentDate = new Date();

interface FooterProps {
	bgColor: string;
    textColor: string;
}

const Footer = ( {bgColor, textColor}: FooterProps ) => {
    if(bgColor=="") {
        return (
            <Box id="footer" sx={{ color: textColor }}>
                <Link className="footer-nav" to="/">Return to Portfolio Homepage</Link>
                <p className="footer-attribution">© {currentDate.getFullYear()} Zach Magloughlin. All rights reserved.</p>
            </Box>
        )
    }
    else {
        return (
            <Box id="footer" sx={{ color: textColor, backgroundColor: bgColor }}>
                <a className="footer-nav" href="/">Return to Portfolio Homepage</a>
                <p className="footer-attribution">© {currentDate.getFullYear()} Zach Magloughlin. All rights reserved.</p>
            </Box>
        )

    }
}

export default Footer;
