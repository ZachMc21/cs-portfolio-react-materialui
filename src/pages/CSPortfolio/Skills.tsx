
import { Box, Container, ThemeProvider, Typography } from '@mui/material';
import Footer from '../../components/Footer';

import ConstructionNotice from '../../components/ConstructionNotice';
import DocumentTitle from '../../utils/DocumentTitle';
import NavbarCS from "../../components/navbar/NavbarCS";

import csLight from '../../styles/csLight';
import "./Skills.css";

function Skills() {

    DocumentTitle("Skills | CS Portfolio");
	
	return (
		<Container maxWidth={false} id="cs-portfolio-skills" sx={{ mt: 12 }}>
        <NavbarCS />
        <ThemeProvider theme={csLight}>
			<Typography className="title" sx={{ py: 0 }}>
                Skills
            </Typography>

            <Box id="skills-page">
                <Box>
                    <Typography className="h1 large rotated" sx={{ color: csLight.secondary.contrastText }}>
                        Front-end
                    </Typography>
                    <Box className="skill-section-parent" id="front-end" sx={{ backgroundColor: csLight.secondary.light }}>
                        <Box id="front-end-core" className="skill-section-child">
                            <Typography className="h2" sx={{ color: csLight.secondary.contrastText }}>
                                Core
                            </Typography>
                            <Box className="tech-stack-container">
                                <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/8/80/HTML5_logo_resized.svg" height="40" width="auto" />
                                <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" height="40" width="auto" />
                                <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg" height="40" width="auto" />
                            </Box>
                        </Box> {/* end #front-end-core */}
                        <Box id="front-end-frameworks" className="skill-section-child">
                            <Typography className="h2" sx={{ color: csLight.secondary.contrastText }}>
                                Frameworks
                            </Typography>
                            <Box className="tech-stack-container">
                                <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="40" width="auto" />
                                <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" height="40" width="auto" />
                            </Box>
                        </Box> {/* end #front-end-frameworks */}
                        <Box id="front-end-libraries" className="skill-section-child">
                            <Typography className="h2" sx={{ color: csLight.secondary.contrastText }}>
                                Libraries
                            </Typography>
                            <Box className="tech-stack-container">
                                <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/8/81/JQuery_logo_text.svg" height="40" width="auto" />
                                <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" height="40" width="auto" />
                            </Box>
                        </Box> {/* end #front-end-libraries */}
                        <Box id="design-languages" className="skill-section-child">
                            <Typography className="h2" sx={{ color: csLight.secondary.contrastText }}>
                                Design Languages
                            </Typography>
                            <Box className="tech-stack-container">
                                <svg className="tech-logo" width="50" height="40" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#0073E6" fill-rule="evenodd" d="M24 5.601V1.592a.344.344 0 0 0-.514-.298l-2.64 1.508a.688.688 0 0 0-.346.597v4.009c0 .264.285.43.514.298l2.64-1.508A.688.688 0 0 0 24 5.6ZM.515 1.295l7.643 4.383a.688.688 0 0 0 .684 0l7.643-4.383a.344.344 0 0 1 .515.298v12.03c0 .235-.12.453-.319.58l-4.65 2.953 3.11 1.832c.22.13.495.127.713-.009l4.61-2.878a.344.344 0 0 0 .161-.292v-4.085c0-.254.14-.486.362-.606l2.507-1.346a.344.344 0 0 1 .506.303v7.531c0 .244-.13.47-.34.593l-7.834 4.592a.688.688 0 0 1-.71-.009l-5.953-3.681A.344.344 0 0 1 9 18.808v-3.624c0-.115.057-.222.153-.286l4.04-2.694a.688.688 0 0 0 .307-.572v-4.39a.137.137 0 0 0-.208-.117l-4.44 2.664a.688.688 0 0 1-.705.002L3.645 7.123a.138.138 0 0 0-.208.118v7.933a.344.344 0 0 1-.52.295L.5 14.019C.19 13.833 0 13.497 0 13.135V1.593c0-.264.286-.43.515-.298Z" clip-rule="evenodd"/></svg>
                            </Box>
                        </Box> {/* end #front-end-libraries */}
                    </Box>
                </Box> {/* end #front-end */}
                <Box>
                    <Typography className="h1 large rotated" sx={{ color: csLight.secondary.contrastText }}>
                        Back-end
                    </Typography>
                    <Box className="skill-section-parent" id="back-end" sx={{ backgroundColor: csLight.secondary.light }}>
                        <Box id="back-end-core" className="skill-section-child">
                            <Typography className="h2" sx={{ color: csLight.secondary.contrastText }}>
                                Core
                            </Typography>
                            <Box id="back-end-core-tech" className="tech-stack-container two-rows">
                                <Box className="tech-stack-row">
                                    <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" height="40" width="auto" />
                                    <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/3/3b/PHP_Logo%2C_text_only.svg" height="40" width="auto" />
                                    <img className="tech-logo" src="/src/assets/logos/ruby.png" height="40" width="auto" />
                                </Box>
                                <Box className="tech-stack-row">
                                    <img className="tech-logo" src="/src/assets/logos/java.png" height="40" width="auto" />
                                    <img className="tech-logo" src="https://en.vetores.org/d/c-plus-plus.svg" height="40" width="auto" />
                                </Box>
                            </Box>
                        </Box> {/* end #front-end-core */}
                        <Box id="back-end-databases" className="skill-section-child">
                            <Typography className="h2" sx={{ color: csLight.secondary.contrastText }}>
                                Databases
                            </Typography>
                            <Box className="tech-stack-container">
                                <img className="tech-logo" src="/src/assets/logos/mysql.png" height="40" width="auto" />
                                <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" height="40" width="auto" />
                                <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg" height="40" width="auto" />
                            </Box>
                        </Box> {/* end #back-end-databses */}
                    </Box>
                </Box> {/* end #back-end */}
                <Box>
                    <Typography className="h1 large rotated" sx={{ color: csLight.secondary.contrastText }}>
                        Other
                    </Typography>
                    <Box className="skill-section-parent" id="back-end" sx={{ backgroundColor: csLight.secondary.light }}>
                        <Box id="version-control" className="skill-section-child">
                            <Typography className="h2" sx={{ color: csLight.secondary.contrastText }}>
                                Version control
                            </Typography>
                            <Box className="tech-stack-container">
                                <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" height="40" width="auto" />
                                <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" height="40" width="auto" />
                            </Box>
                        </Box> {/* end #version-control */}
                        <Box id="data-science" className="skill-section-child">
                            <Typography className="h2" sx={{ textAlign: "left", color: csLight.secondary.contrastText }}>
                                Data Science
                            </Typography>
                            <Box className="tech-stack-container">
                                <img className="tech-logo" src="https://matplotlib.org/3.6.0/_images/sphx_glr_logos2_002_2_0x.png" height="40" width="auto" />
                                <img className="tech-logo" src="https://pandas.pydata.org/static/img/pandas_secondary.svg" height="40" width="auto" />
                            </Box>
                        </Box> {/* end #data-science */}
                        <Box id="project-management" className="skill-section-child">
                            <Typography className="h2" sx={{ textAlign: "left", color: csLight.secondary.contrastText }}>
                                Project <br /> Management
                            </Typography>
                            <Box className="tech-stack-container two-rows">
                                <Box className="tech-stack-row">
                                    <img className="tech-logo" src="/src/assets/logos/jira.png" height="40" width="auto" />
                                    <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Azure_DevOps_icon.svg" height="40" width="auto" />
                                </Box>
                                <Box className="tech-stack-row">
                                    <img className="tech-logo" src="/src/assets/logos/notion.svg" height="40" width="auto" />
                                    <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/8/86/Feather-logos-trello.svg" height="40" width="auto" />
                                </Box>
                            </Box>
                        </Box> {/* end #project-management */}
                        <Box id="deployment" className="skill-section-child">
                            <Typography className="h2" sx={{ textAlign: "left", color: csLight.secondary.contrastText }}>
                                Deployment
                            </Typography>
                            <Box className="tech-stack-container">
                                <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Linux_mascot_tux.png" height="40" width="auto" />
                                <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Docker_Logo.svg" height="40" width="auto" />
                            </Box>
                        </Box> {/* end #deployment */}
                        <Box id="ides" className="skill-section-child">
                            <Typography className="h2" sx={{ color: csLight.secondary.contrastText }}>
                                IDEs
                            </Typography>
                            <Box className="tech-stack-container">
                                <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" height="40" width="auto" />
                                <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Visual_Studio_Icon_2022.svg" height="40" width="auto" />
                                <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Eclipse-SVG.svg" height="40" width="auto" />
                            </Box>
                        </Box> {/* end #ides */}
                        <Box id="design" className="skill-section-child">
                            <Typography className="h2" sx={{ color: csLight.secondary.contrastText }}>
                                Design
                            </Typography>
                            <Box className="tech-stack-container">
                                <img className="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" height="40" width="auto" />
                            </Box>
                        </Box> {/* end #design */}
                    </Box>
                </Box>
            </Box>

            <Footer />
        </ThemeProvider>
		</Container>
	);

}

export default Skills;