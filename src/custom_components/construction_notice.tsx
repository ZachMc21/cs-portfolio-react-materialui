import { useNavigate } from 'react-router-dom';
import ConstructionIcon from '@mui/icons-material/Construction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ConstructionProps {
    title: string;
}

const ConstructionNotice = ({ title }: ConstructionProps) => {
    const navigate = useNavigate();

    return(
        <div className="construction-notice">
            <ConstructionIcon />
            <h1>{title}</h1>
            <p>This page is under construction. Check back later!</p>
            <button onClick={() => navigate(-1)}>
                Go back
                <ArrowBackIcon />
            </button>
        </div>
    );
}

export default ConstructionNotice;