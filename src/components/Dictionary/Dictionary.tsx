import { useSelector } from 'react-redux';
//==========================================
import Header from '../Header/Header';
import Search from '../Search/Search';
import Meaning from '../Meaning/Meaning';
import NotFound from '../NotFound/NotFound';
//==========================================
import { selectWord, selectStatus } from '../../redux/wordsSlice/slice';
//==========================================
import { DictionaryEl } from './styled-components';
import { Container } from '../../styles/components';

const Dictionary = () => {
    const words = useSelector(selectWord);
    const status = useSelector(selectStatus);

    return (
        <DictionaryEl>
            <Container>
                <Header />
                <Search />
                {words.length > 0 && <Meaning words={words} />}
                {status === 'error' && <NotFound />}
            </Container>
        </DictionaryEl>
    );
}

export default Dictionary;
