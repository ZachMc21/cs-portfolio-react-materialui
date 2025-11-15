import { Box, Container, CssBaseline, Link } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import csLightTheme from '../themes/theme_cs';
import { useResolvedPath } from 'react-router-dom';

interface LinkProps {
    text: string;
	link: string;
}

const ConstructionNotice = ({ text, link }: LinkProps) => {
    const path: string = useResolvedPath("").pathname;


	return (
		<Container>
			<ThemeProvider theme={csLightTheme}>
			    <CssBaseline />

			    <Box className="cs-link-container">
                    <Link href={`${path}/${link}`}>
                        {text}
                    </Link>
                
                </Box>

			</ThemeProvider>
		</Container>
	);
}

export default ConstructionNotice;