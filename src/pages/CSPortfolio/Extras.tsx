
import { Box, Container, Link, ThemeProvider, Typography } from '@mui/material';
import ConstructionNotice from '../../components/molecules/ConstructionNotice';

import Footer from '../../components/molecules/Footer';

import DocumentTitle from '../../utils/DocumentTitle';
import mountKaoScript from "../../utils/ComponentDidMount";
import NavbarCS from "../../components/organisms/navbar/NavbarCS";

import csLight from '../../styles/csLight';
import "../../styles/cs-extras.scss";
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
					<Typography className="h1 rotated">Extracurriculars</Typography>
					<Box className="extras-content">
						<Box className="extras-img-text">
							<img src="/src/assets/logos/high-grade.png" height="60" width="auto" ></img>
								
							<strong>
							<a href="highgrade.mines.edu">
								<Box className="extras-text">
									<Typography className="h2">High Grade</Typography>
									<Typography className="h2">CSM Journal of the Arts</Typography>
									<Typography className="subtitle">Jury member, contributor</Typography>
								</Box>
							</a>
							</strong>
						</Box>
						<Box className="extras-text">
							<Typography className="h2">Concert Band</Typography>
							<Typography className="subtitle">Flute</Typography>
						</Box>
						<Box className="extras-text">
							<Typography className="h2">Pyrotechnics Club</Typography>
							<Typography className="subtitle">Member</Typography>
						</Box>
					</Box>
				</Box>

				<Box className="extras-category">
					<Typography className="h1 rotated">Hobbies</Typography>
					<Box className="extras-content">
						<Typography className="h2">Cross stitch</Typography>
						<Typography className="h2">Crochet</Typography>
						<strong> <Link href="/photography-portfolio"> <Typography className="h2">Photography</Typography> </Link> </strong>
						<Typography className="h2">Digital painting</Typography>
						<Typography className="h2">Fiction writing</Typography>
						<Box className="extras-text">
							<Typography className="h2">Traditional art</Typography>
							<Typography className="subtitle">graphite, acrylic, gouache, mixed media</Typography>
						</Box>
                        <Suspense fallback={<GalleryLazyLoad />}> 
                            <RowsPhotoAlbum photos={hobbyPhotos} targetRowHeight={400} rowConstraints={{ singleRowMaxHeight: 700 }}></RowsPhotoAlbum>
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
