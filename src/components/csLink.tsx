import { Box, Container, CssBaseline, Link } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import csLight from '../styles/csLight';
import { useResolvedPath } from 'react-router-dom';

interface LinkProps {
    text: string;
	link: string;
}

const CSLink = ({ text, link }: LinkProps) => {
    const path: string = useResolvedPath("").pathname;


	return (
		<Container>
			<ThemeProvider theme={csLight}>
			    <CssBaseline />

			    <Box className="cs-link-container"
                    sx = {{color: csLight.primary.dark, backgroundColor: csLight.primary.light}}>
                    <Link href={`${path}/${link}`}>
                        {text}
                    </Link>
                </Box>

			</ThemeProvider>
		</Container>
	);
}

export default CSLink;