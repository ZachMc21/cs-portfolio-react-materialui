
import { Box, Link, ThemeProvider, Typography } from '@mui/material';

import Footer from '../../components/molecules/Footer';

import DocumentTitle from '../../utils/DocumentTitle';
import NavbarCS from "../../components/organisms/navbar/NavbarCS";

import csLight from '../../styles/csLight';
import "../../styles/cs-portfolio/extras.scss";
import { Suspense, useEffect } from 'react';
import GalleryLazyLoad from '../../components/molecules/ProjectsLazyLoad';
import { RowsPhotoAlbum } from 'react-photo-album';


const photosPath: string = "/src/assets/extras/";

const hobbyPhotos = [
  { src: photosPath + "cross-stitch_01.jpg", width: 424, height: 386 },
  { src: photosPath + "cross-stitch_02.jpg", width: 462, height: 462 },
]

function Extras() {

  DocumentTitle("Extras | CS Portfolio");
	
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "kao-script";
    script.src = "https://keepandroidopen.org/banner.js?size=mini&animation=off&id=keep-android-open";
    script.async = true;

    document.getElementById("keep-android-open")!.appendChild(script);
	console.log("KAO script mounted successfully");

    // // clean up the script when the component is unmounted
    // return () => {
    //   document.getElementById("keep-android-open")!.removeChild(script);
    // }
  }, []);
	
	return (
		<Box id="cs-extras-page" sx={{ mt: 12 }} >
        <NavbarCS />
        <ThemeProvider theme={csLight}>

			<Box className="extras-container">
				<Typography className="cs-page-title">
					Extra Content
				</Typography>

				<Box className="extras-category">
					<Typography className="h1 rotated">Certificates</Typography>
					<Box className="extras-content">
						<Box className="extras-img-text">
							<img src="/src/assets/logos/datacamp.png" height="60" width="auto"></img>
							<Box className="extras-text">
								<Typography className="h2">Datacamp</Typography>
								<Typography className="subtitle">Introduction to SQL</Typography>
								<Typography className="subtitle">Intermediate SQL</Typography>
							</Box>
						</Box>
						<Box className="extras-img-text ">
							<a className="extras-img-text" href="https://www.hackerrank.com/profile/ZachMc21">
								<img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Cib-hackerrank_%28CoreUI_Icons_v1.0.0%29.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" height="60" width="auto"></img>
								<Box className="extras-text">
									<Typography className="h2">HackerRank</Typography>
									<Typography className="subtitle">Coming soon</Typography>
								</Box>
							</a>
						</Box>
						<Box className="extras-img-text">
							<a className="extras-img-text" href="https://www.freecodecamp.org/Zach-Mc-21">
								<img src="/src/assets/logos/freecodecamp.png" height="60" width="auto"></img>
								<Box className="extras-text">
									<Typography className="h2">FreeCodeCamp</Typography>
									<Typography className="subtitle">Coming soon</Typography>
								</Box>
							</a>
						</Box>
					</Box>
				</Box>

				<Box className="extras-category">
					<Typography className="h1 rotated">Extracurriculars</Typography>
					<Box className="extras-content">
						<Box className="extras-img-text">
							<a className="extras-img-text" href="highgrade.mines.edu">
								<img src="/src/assets/logos/high-grade.png" height="60" width="auto" ></img>
								
								<Box className="extras-text">
									<Typography className="h2">High Grade</Typography>
									<Typography className="h2">CSM Journal of the Arts</Typography>
									<Typography className="subtitle">Webmaster</Typography>
									<Typography className="subtitle">Jury member</Typography>
									<Typography className="subtitle">Contributor</Typography>
								</Box>
							</a>
						</Box>
						<Box className="extras-text">
							<Typography className="h2">Concert Band</Typography>
							<Typography className="subtitle">Flute</Typography>
						</Box>
						<Box className="extras-text">
							<Typography className="h2">Pyrotechnics Club</Typography>
							<Typography className="subtitle">Member</Typography>
						</Box>
						<Box className="extras-text">
							<Typography className="h2">Fiber Arts Club</Typography>
							<Typography className="subtitle">Member</Typography>
						</Box>
						<Box className="extras-text">
							<Typography className="h2">Creative Arts Club</Typography>
							<Typography className="subtitle">Member</Typography>
						</Box>
					</Box>
				</Box>

				<Box className="extras-category">
					<Typography className="h1 rotated">Hobbies</Typography>
					<Box className="extras-content">
						<Typography className="h2">Cross stitch</Typography>
						<Typography className="h2">Crochet</Typography>
						<Link href="/photography-portfolio"> <Typography className="h2">Photography</Typography> </Link>
						<Typography className="h2">Digital painting</Typography>
						<Typography className="h2">Fiction writing</Typography>
						<Box className="extras-text">
							<Typography className="h2">Traditional art</Typography>
							<Box className="subtitle-hz">
								<Typography className="subtitle">graphite</Typography>
								<Typography className="subtitle">acrylic</Typography>
								<Typography className="subtitle">gouache</Typography>
								<Typography className="subtitle">mixed media</Typography>
							</Box>
						</Box>
                        <Suspense fallback={<GalleryLazyLoad />}> 
                            <RowsPhotoAlbum photos={hobbyPhotos} targetRowHeight={400} rowConstraints={{ singleRowMaxHeight: 400 }}></RowsPhotoAlbum>
                        </Suspense>
					</Box>
				</Box>
				
				<Box className="extras-category">
					<Typography className="h1 rotated">High School</Typography>
					<Box className="extras-content">
						<Box className="extras-img-text">
							<img src="/src/assets/logos/cyber-patriot.png" height="60px" width="auto"></img>
							<Box className="extras-text">
								<Typography className="h2">AFA CyberPatriot</Typography>
								<Typography className="subtitle">Grades 8th-12th</Typography>
								<Typography className="subtitle">Seasons IX-XIII</Typography>
							</Box>
						</Box>
						<Box className="extras-text">
							<Typography className="h2">National Science Bowl</Typography>
							<Typography className="subtitle">Grades 7th-8th, 11th-12th</Typography>
						</Box>
					</Box>
				</Box>

			</Box>

		<div id="keep-android-open">
		</div>

		<Footer bgColor="" tColor="csLight.palette.secondary.contrastText" />
		</ThemeProvider>
		</Box>
	);

}

export default Extras;
