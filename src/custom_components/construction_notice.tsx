
import ConstructionIcon from '@mui/icons-material/Construction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ConstructionProps {
    title: string;
}

const ConstructionNotice = ({ title }: ConstructionProps) => {
    return(
        <div className="construction-notice">
            <ConstructionIcon />
            <h1>{title}</h1>
            <p>This page is under construction. Check back later!</p>
            <a href=""> { /* TODO */}
                Go back
                <ArrowBackIcon />
            </a>
        </div>
    );
}

export default ConstructionNotice;