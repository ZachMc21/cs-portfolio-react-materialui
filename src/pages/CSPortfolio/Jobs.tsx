
import { Box, Container, ThemeProvider, Typography } from '@mui/material';
import Footer from '../../components/molecules/Footer';

import DocumentTitle from '../../utils/DocumentTitle';
import NavbarCS from "../../components/organisms/navbar/NavbarCS";
import csLight from "../../styles/csLight";
import "../../styles/cs-portfolio/jobs.scss";

function Jobs() {
    DocumentTitle("Jobs | CS Portfolio");

    return (
		<Box id="cs-jobs-page" sx={{ mt: 12 }}>
        <NavbarCS />
        <ThemeProvider theme={csLight}>
            <Typography className="cs-page-title">Employment</Typography>

            <Box className="job-container" sx={{ backgroundColor: csLight.palette.secondary.light }}>
                <Box className="job-header-container">
                    <Box className="title-date-container">
                        <Typography className="job-header-title">Software Developer</Typography>
                        <Typography className="job-dates">July 6, 2026 - Present</Typography>
                    </Box>
                    <Box className="job-company-container">
                        <img src="https://www.fedramp.gov/assets/img/logos/CSP_logos/TrackVia%20Logo.png" height="60px" width="auto"></img>
                        <Box className="job-subtitle-text">
                            <Typography className="job-header-company">TrackVia</Typography>
                            <Typography className="job-header-location">Denver, CO</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box className="job-desc-container">

                </Box>

                <Box className="job-gallery-container">

                </Box>
            </Box>

            <Box className="job-container" sx={{ backgroundColor: csLight.palette.secondary.light }}>
                <Box className="job-header-container">
                    <Box className="title-date-container">
                        <Typography className="job-header-title">Web Intern</Typography>
                        <Typography className="job-dates">July 2025 - December 2025</Typography>
                    </Box>
                    <Box className="job-company-container">
                        <img src="/src/assets/logos/omnia-workspace.png" height="60px" width="60px"></img>
                        <Box className="job-subtitle-text">
                            <Typography className="job-header-company">Omnia<br />WorkSpace</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box className="job-desc-container">

                </Box>

                <Box className="job-gallery-container">

                </Box>
            </Box>

        </ThemeProvider>
        </Box>
    )
};

export default Jobs;