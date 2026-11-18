import { Box, Link, Typography } from "@mui/material";
import "../../../styles/cs-portfolio/projects-categories.scss";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { Suspense } from "react";
import GalleryLazyLoad from "../../molecules/ProjectsLazyLoad";

import ViteLogo from "/logos/vite.svg";
import MUILogo from "/logos/mui.svg";
import TSLogo from "/logos/typescript-128.png";
import NotionLogo from "/logos/notion.svg";
import RubyLogo from "/logos/ruby.png";
import JekyllLogo from "/logos/jekyll.png";
import SupabaseLogo from "/logos/supabase.png";

import Portfolio2Photo1 from "/projects/webdev-cs-portfolio_01.png";
import Portfolio2Photo2 from "/projects/webdev-cs-portfolio_02.png";
import Portfolio2Photo3 from "/projects/webdev-cs-portfolio_03.png";
const portfolio2Photos = [
  { src: Portfolio2Photo1, width: 1263, height: 579 },
  { src: Portfolio2Photo2, width: 658, height: 520 },
  { src: Portfolio2Photo3, width: 658, height: 739 },
];

import OmniaPhoto1 from "/projects/webdev-omnia_01.png";
import OmniaPhoto2 from "/projects/webdev-omnia_02.gif";
import OmniaPhoto3 from "/projects/webdev-omnia_03.gif";
const omniaPhotos = [
  { src: OmniaPhoto1, width: 1267, height: 577 },
  { src: OmniaPhoto2, width: 1266, height: 573 },
  { src: OmniaPhoto3, width: 529, height: 820 },
];

import HighGrade1 from "/projects/webdev-highgrade_01.png";
import HighGrade2 from "/projects/webdev-highgrade_02.png";
import HighGrade3 from "/projects/webdev-highgrade_03.png";
const highgradePhotos = [
  { src: HighGrade1, width: 1148, height: 526 },
  { src: HighGrade2, width: 701, height: 702 },
  { src: HighGrade3, width: 1146, height: 527 },
];

import portfolio1Photo1 from "/projects/webdev-cs-portfolio-old_01.png";
import portfolio1Photo2 from "/projects/webdev-cs-portfolio-old_02.gif";
const portfolio1Photos = [
  { src: portfolio1Photo1, width: 840, height: 529 },
  { src: portfolio1Photo2, width: 525, height: 799 },
];


function ProjectsWebdev() {

    return (
        <Box className="projects-category" id="webdev-container" sx={{ display: "none" }}>

            <Box className="project-item">
                <Box className="project-item-header">
                    <Typography className="project-item-title">CS Portfolio v2</Typography>
                    <Link className="project-item-link" href="/cs-portfolio"><OpenInNewIcon></OpenInNewIcon></Link>
                </Box>
                <Box className="project-desc-container">
                    <Typography className="project-desc">My previous portfolio page was very basic, built quickly for the sake of having something to expand on my resume.</Typography> 
                    <Typography className="project-desc">This new page is a larger project and has a more polished design.</Typography>
                    <Typography className="project-desc">Its <a href="/">parent project</a> is a collection of sites that I've built for fun as ways to learn new skills and polish existing ones.</Typography>
                </Box>
                <Box className="project-skills-gallery-container">
                    <Box className="project-skills">
                        <Typography>react file organization</Typography>
                        <Typography>react router</Typography>
                        <Typography>scss/sass</Typography>
                        <Typography>design</Typography>
                        <Typography>animations</Typography>
                    </Box>
                    <Box className="project-stack-gallery">
                        <Box className="project-stack">
                            <Box className="tech-logo-name">
                                <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-1" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="40" width="auto" /></Box>
                                <Typography className="subtitle">React</Typography>
                            </Box>
                            <Box className="tech-logo-name">
                                <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-3" src={ViteLogo} height="40" width="auto" /></Box>
                                <Typography className="subtitle">Vite</Typography>
                            </Box>
                            <Box className="tech-logo-name">
                                <Box className="tech-logo-container"><img className="tech-logo-hz slide-bck-center anim-delay-5" src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" height="40" width="auto" /></Box>
                                <Typography className="subtitle">SASS</Typography>
                            </Box>
                            <Box className="tech-logo-name">
                                <Box className="tech-logo-container"><img className="tech-logo-hz slide-bck-center anim-delay-7" src={MUILogo} /></Box>
                                <Typography className="subtitle">Material UI</Typography>
                            </Box>
                            <Box className="tech-logo-name">
                                <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-9" src="https://animista.net/images/animista-logo-small.svg" height="40" width="auto" /></Box>
                                <Typography className="subtitle">Animista</Typography>
                            </Box>
                        </Box>
                        <Suspense fallback={<GalleryLazyLoad />}>                        
                            <RowsPhotoAlbum photos={portfolio2Photos} targetRowHeight={400} rowConstraints={{ singleRowMaxHeight: 400 }}></RowsPhotoAlbum>
                        </Suspense>
                    </Box> {/* End project-stack-gallery */}
                </Box>
            </Box> {/* End CS Portfolio v2 */}

            <Box className="project-item">
                <Box className="project-item-header">
                    <Typography className="project-item-title">Omnia WorkSpace</Typography>
                    <Link className="project-item-link" href="https://omniaworkspace.com" target="_blank" rel="noopener noreferrer"><OpenInNewIcon></OpenInNewIcon></Link>
                </Box>
                <Box className="project-desc-container">
                    <Typography className="project-desc">As a web developer intern for Omnia WorkSpace, I helped rebuild their website from the ground up.</Typography>
                    <Typography className="project-desc">The first part of this project had two members, where I took the lead in task creation and assignment.</Typography>
                </Box>
                <Box className="project-skills-gallery-container">
                    <Box className="project-skills">
                        <Typography>project management</Typography>
                        <Typography>project management software</Typography>
                        <Typography>mobile-first design</Typography>
                    </Box>
                    <Box className="project-stack-gallery">
                        <Box className="project-stack">
                            <Box className="tech-logo-name">
                                <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-1" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Devicon-html5-plain.svg" height="40" width="auto" /></Box>
                                <Typography className="subtitle">HTML5</Typography>
                            </Box>
                            <Box className="tech-logo-name">
                                <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-3" src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" height="40" width="auto" /></Box>
                                <Typography className="subtitle">CSS3</Typography>
                            </Box>
                            <Box className="tech-logo-name">
                                <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-5" src={TSLogo} height="40" width="auto" /></Box>
                                <Typography className="subtitle">TypeScript</Typography>
                            </Box>
                            <Box className="tech-logo-name">
                                <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-7" src={NotionLogo} /></Box>
                                <Typography className="subtitle">Notion</Typography>
                            </Box>
                            <Box className="tech-logo-name">
                                <Box className="tech-logo-container"><img className="tech-logo-hz slide-bck-center anim-delay-9" src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Azure_DevOps_icon.svg" height="40" width="auto" /></Box>
                                <Typography className="subtitle">Azure DevOps</Typography>
                            </Box>
                        </Box>
                        <Suspense fallback={<GalleryLazyLoad />}> 
                            <RowsPhotoAlbum photos={omniaPhotos} targetRowHeight={400} rowConstraints={{ singleRowMaxHeight: 700 }}></RowsPhotoAlbum>
                        </Suspense>
                    </Box> {/* End project-stack-gallery */}
                </Box>
            </Box> {/* End Omnia WorkSpace */}


            <Box className="project-item">
                <Box className="project-item-header">
                    <Typography className="project-item-title">High Grade Website Maintenance</Typography>
                    <Box className="link-container">
                        <Link className="project-item-link" href="https://highgrade.mines.edu/" target="_blank" rel="noopener noreferrer">
                            <OpenInNewIcon></OpenInNewIcon>
                            <Typography className="subtitle">Current Site</Typography>
                        </Link>
                        <Link className="project-item-link" href="https://web.archive.org/web/20250818214615/https://highgrade.mines.edu/" target="_blank" rel="noopener noreferrer">
                            <OpenInNewIcon></OpenInNewIcon>
                            <Typography className="subtitle">Site Archive</Typography>
                        </Link>
                    </Box>
                </Box>
                <Box className="project-desc-container">
                    <Typography className="project-desc">I inherited this project from a long line of previous developers.</Typography>
                    <Typography className="project-desc">I quickly learned Ruby, Jekyll, and Linux server deployment, to launch the 2025 journal webpage on time with the physical release.</Typography>
                    <Typography className="project-desc">I made design decisions and communicated with non-technical staff to get the files I needed to follow the existing format of the site.</Typography>
                    <Typography className="project-desc">After the release, I wrote extensive documentation detailing the installation process and what to edit, so that future developers with less experience than me could pick up work quickly.</Typography>
                </Box>
                <Box className="project-skills-gallery-container">
                    <Box className="project-skills">
                        <Typography>working with a large existing project</Typography>
                        <Typography>learning new languages quickly</Typography>
                        <Typography>writing technical documentation</Typography>
                        <Typography>deployment to a live linux server</Typography>
                    </Box>
                    <Box className="project-stack-gallery">
                        <Box className="project-stack">
                            <Box className="tech-logo-name">
                                <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-1" src={RubyLogo} height="40" width="auto" /></Box>
                                <Typography className="subtitle">Ruby 2.8</Typography>
                            </Box>
                            <Box className="tech-logo-name">
                                <Box className="tech-logo-container"><img className="tech-logo-hz slide-bck-center anim-delay-3" src={JekyllLogo} height="40" width="auto" /></Box>
                                <Typography className="subtitle">Jekyll 3</Typography>
                            </Box>
                            <Box className="tech-logo-name">
                                <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-5" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Linux_mascot_tux.png" height="40" width="auto" /></Box>
                                <Typography className="subtitle">Linux deployment</Typography>
                            </Box>
                        </Box>
                        <Suspense fallback={<GalleryLazyLoad />}> 
                            <RowsPhotoAlbum photos={highgradePhotos} targetRowHeight={400} rowConstraints={{ singleRowMaxHeight: 700 }}></RowsPhotoAlbum>
                        </Suspense>
                    </Box> {/* End project-stack-gallery */}
                </Box>
            </Box> {/* End HG Website */}

            <Box className="project-item">
                <Box className="project-item-header">
                    <Typography className="project-item-title">CS Portfolio v1</Typography>
                    <Link className="project-item-link" href="https://zachmc21.github.io" target="_blank" rel="noopener noreferrer"><OpenInNewIcon></OpenInNewIcon></Link>
                </Box>
                <Box className="project-desc-container">
                    <Typography className="project-desc">I put together a quick-and-dirty website to complement my resume.</Typography>
                    <Typography className="project-desc">This project is written entirely in raw HTML, CSS, and JavaScript. I wrote custom JavaScript instead of using a framework/library.</Typography>
                </Box>
                <Box className="project-skills-gallery-container">
                    <Box className="project-skills">
                        <Typography>mobile-first development</Typography>
                        <Typography>responsive design</Typography>
                        <Typography>css flexbox</Typography>
                        <Typography>custom javascript</Typography>
                    </Box>
                    <Box className="project-stack-gallery">
                        <Box className="project-stack">
                            <Box className="tech-logo-name">
                                <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-1" src="https://upload.wikimedia.org/wikipedia/commons/8/80/HTML5_logo_resized.svg" height="40" width="auto" /></Box>
                                <Typography className="subtitle">HTML5</Typography>
                            </Box>
                            <Box className="tech-logo-name">
                                <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-3" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" height="40" width="auto" /></Box>
                                <Typography className="subtitle">CSS3</Typography>
                            </Box>
                            <Box className="tech-logo-name">
                                <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-5" src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg" height="40" width="auto" /></Box>
                                <Typography className="subtitle">JavaScript</Typography>
                            </Box>
                        </Box>
                        <Suspense fallback={<GalleryLazyLoad />}> 
                            <RowsPhotoAlbum photos={portfolio1Photos} targetRowHeight={400} rowConstraints={{ singleRowMaxHeight: 700 }}></RowsPhotoAlbum>
                        </Suspense>
                    </Box> {/* End project-stack-gallery */}
                </Box>
            </Box> {/* End CS Portfolio v1 */}

            <Box className="project-item">
                <Box className="project-item-header">
                    <Typography className="project-item-title">Modyfi Web Print</Typography>
                </Box>
                <Box className="project-desc-container">
                    <Typography className="project-desc">As part of summer field session (CSCI370), myself and three others worked to develop a web store for Modyfi Print.</Typography>
                    <Typography className="project-desc">The project used Modyfi's custom image format, allowed shoppers to make certain modifications to the projects, then took them through the ordering and checkout system.</Typography>
                </Box>
                <Box className="project-skills-gallery-container">
                    <Box className="project-skills">
                        <Typography>designing from a Figma document</Typography>
                        <Typography>database design</Typography>
                        <Typography>database buckets</Typography>
                        <Typography>api integration</Typography>
                        <Typography>agile & scrum</Typography>
                        <Typography>technical presentations</Typography>
                    </Box>
                    <Box className="project-stack project-stack-hz">
                        <Box className="tech-logo-name">
                            <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-5" src={TSLogo} height="40" width="auto" /></Box>
                            <Typography className="subtitle">TypeScript</Typography>
                        </Box>
                        <Box className="tech-logo-name">
                            <Box className="tech-logo-container"><img className="tech-logo-hz slide-bck-center anim-delay-3" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" height="40" width="auto" /></Box>
                            <Typography className="subtitle">Tailwind CSS</Typography>
                        </Box>
                        <Box className="tech-logo-name">
                            <Box className="tech-logo-container"><img className="tech-logo-vt slide-bck-center anim-delay-5" src={SupabaseLogo} height="40" width="auto" /></Box>
                            <Typography className="subtitle">Supabase</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box> {/* End Modyfi web print */}
        </Box>
    )
}

export default ProjectsWebdev;