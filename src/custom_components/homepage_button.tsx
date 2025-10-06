import Button from "@mui/material/Button";

function HomepageButton(props) {
  const { text } = props;
  return (
    <Button variant="contained" color="primary" className="homepage_button"
        sx={{
            ':hover': {
                bgcolor: 'primary.main',
                color: 'white',
            },
        }}>
        <b>{text}</b>
    </Button>
  );
};

export default HomepageButton;