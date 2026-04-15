import { Box } from "@mui/material";
import "./footer.css";

const currentDate = new Date();

interface FooterProps {
	bgColor: string;
    tColor: string;
}

const Footer = ( {bgColor, tColor}: FooterProps ) => {
    if(bgColor=="") {
        return (
            <Box id="footer" sx={{ color: tColor }}>
                <a className="footer-nav" href="/">Return to Portfolio Homepage</a>
                <p className="footer-attribution">© {currentDate.getFullYear()} Zach Magloughlin. All rights reserved.</p>
            </Box>
        )
    }
    else {
        return (
            <Box id="footer" sx={{ color: tColor, backgroundColor: bgColor }}>
                <a className="footer-nav" href="/">Return to Portfolio Homepage</a>
                <p className="footer-attribution">© {currentDate.getFullYear()} Zach Magloughlin. All rights reserved.</p>
            </Box>
        )

    }
}

export default Footer;
