import {
    NotFoundEl, Smile,
    Title, Text
} from './styled-components';
//==========================================
import smile from '../../assets/images/smile.png';

const NotFound = () => {
    return (
        <NotFoundEl>
            <Smile src={smile} alt='sad smile'></Smile>
            <Title>No Definitions Found</Title>
            <Text>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</Text>
        </NotFoundEl>
    );
}

export default NotFound;