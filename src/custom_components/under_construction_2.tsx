

import type {ReactElement} from 'react';
import ConstructionIcon from '@mui/icons-material/Construction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Props {
    pageTitle?: string;
}

const ConstructionNotice = function ConstructionNotice({ prop: Props }): ReactElement {
    return <div>{prop}</div>;
}