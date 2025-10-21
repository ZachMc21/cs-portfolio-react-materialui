import ConstructionIcon from '@mui/icons-material/Construction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function UnderConstruction(pageName: String = "") {
    const pageTitle: String = pageName;
    return (
        <div id="under-construction">
            <ConstructionIcon />
            <h1>{pageTitle}</h1>
            <p>This page is under construction. Check back later!</p>
            {/* TODO link back a page */}
            <a href="">
                Go back
                <ArrowBackIcon />
            </a>
        </div>
    );
}