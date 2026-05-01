import { Container, CssBaseline, Typography } from '@mui/material';

import '../../styles/gallery-lazy-load.scss';

const GalleryLazyLoad = () => {

    console.log("Loading gallery placeholder...");
    
	return (
		<Container>
			<CssBaseline />

			<div className="gallery-lazy-load">
                <Typography className="gallery-loading">Images loading, please wait...</Typography>
            </div>
		</Container>
	);
}

export default GalleryLazyLoad;