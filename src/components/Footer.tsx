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
            <Box id="footer-copyright" sx={{ color: tColor }}>
                <p className="footer">© {currentDate.getFullYear()} Zach Magloughlin. All rights reserved.</p>
            </Box>
        )
    }
    else {
        return (
            <Box id="footer-copyright" sx={{ backgroundColor: bgColor, color: tColor }}>
                <p className="footer">© {currentDate.getFullYear()} Zach Magloughlin. All rights reserved.</p>
            </Box>
        )

    }
}

export default Footer;
