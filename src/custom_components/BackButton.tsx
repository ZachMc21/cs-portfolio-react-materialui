import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Container, ThemeProvider, Typography } from '@mui/material';
import csTheme from '../themes/theme_cs';
import homeThemeLight from '../themes/theme_home';


const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    //If there's history to go back to, go back
    if (window.history.length > 1) {
      navigate(-1);
    }
    //Otherwise, go home.
    else {
      navigate('/');
    }
  };

  return (
		<Container>
			<ThemeProvider theme={csTheme}>
			<Button onClick={handleBack} variant="contained" className="construction-notice"
                sx={{
                    mx: "auto", mt: 3, p: 3, fontSize: 2,
                    color: homeThemeLight.palette.primary.dark, backgroundColor: homeThemeLight.palette.primary.light,
                    display: "flex", flexDirection: "column", justifyContent: "center", justifySelf: "center",
                    '&:hover': { transform: "scale3d(1.1, 1.1, 1)" }
                }}>
				<Typography sx={{ fontStyle: "italic" }}> Go back </Typography>
				<ArrowBackIcon />
			</Button>
			</ThemeProvider>
		</Container>
  );
};

export default BackButton;
