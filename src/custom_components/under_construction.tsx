import ConstructionIcon from '@mui/icons-material/Construction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

var underConstruction = document.createElement('div');

function UnderConstruction(pageName: string) {

    underConstruction.setAttribute('id', 'under-construction');

    const constructionIcon = document.createElement('Constructionicon');
    underConstruction.appendChild(constructionIcon);

    var title = document.createElement('h1');
    if(pageName=="") {
        title.setAttribute("display", "none");
    }
    else {
        title.innerText = pageName;
        underConstruction.appendChild(title);
    }

    var constructionText = document.createElement('p');
    constructionText.innerText = "This page is under construction. Check back later!";
    underConstruction.appendChild(constructionText);

    var backLink = document.createElement('a');
    /* TODO link back a page */
    backLink.innerText = "Go back";
    underConstruction.appendChild(document.createElement('ArrowBackIcon'));

    /* HTML
    return (
        <div id="under-construction">
            <ConstructionIcon />
            <h1>{pageTitle}</h1>
            <p>This page is under construction. Check back later!</p>
            TODO link back a page
            <a href="">
                Go back
                <ArrowBackIcon />
            </a>
        </div>
    );
    */
}

export default underConstruction;