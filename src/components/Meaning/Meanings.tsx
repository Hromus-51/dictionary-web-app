import {
    PartOfSpeech, PartOfSpeechTitle, Line,
    MeaningWrapper, MeaningTitle, Definitions,
    DefinitionsItem, Definition, VariantsWrapper,
    VariantsTitle, VariantsWords, VariantsLink, Example
} from './styled-components';
//==========================================
import { useAppDispatch } from '../../redux/store';
import { setSearchValue } from '../../redux/searchSlice/slice';
import { fetchWords } from '../../redux/wordsSlice/asyncActions';
import { url } from '../../API/url';
//==========================================
interface MeaningsInterface {
    partOfSpeech: string;
    definitions: {
        definition: string;
        synonyms: string[];
        antonyms: string[];
        example: string;
    }[];
    synonyms: string[];
    antonyms: string[];
}

const Meanings: React.FC<{ meanings: MeaningsInterface[] }> = ({ meanings }) => {
    const dispatch = useAppDispatch();

    const handleClick: React.MouseEventHandler<HTMLParagraphElement> = (e) => {
        const searchValue = (e.target as HTMLElement).innerHTML.replace(',', '');
        dispatch(setSearchValue(searchValue))
        dispatch(fetchWords({ url, searchValue }));
    }

    return (
        <>
            {meanings.map((item, index) => (
                <PartOfSpeech key={index}>

                    <PartOfSpeechTitle>
                        {item.partOfSpeech}
                        <Line />
                    </PartOfSpeechTitle>

                    <MeaningWrapper>
                        <MeaningTitle>Meaning</MeaningTitle>
                        <Definitions>
                            {item.definitions.map((item, index) => (
                                <DefinitionsItem key={index}>
                                    {item.definition && <Definition>{item.definition}</Definition>}
                                    {item.example && <Example>"{item.example}"</Example>}
                                </DefinitionsItem>
                            ))}
                        </Definitions>
                    </MeaningWrapper>

                    {item.synonyms.length > 0 &&
                        <VariantsWrapper>
                            <VariantsTitle>Synonyms</VariantsTitle>
                            <VariantsWords>
                                {item.synonyms.map((word, index, arr) => (
                                    <VariantsLink onClick={handleClick} key={word}>
                                        {word}{index === arr.length - 1 ? '  ' : ','}
                                    </VariantsLink>
                                ))}
                            </VariantsWords>
                        </VariantsWrapper>
                    }

                    {item.antonyms.length > 0 &&
                        <VariantsWrapper>
                            <VariantsTitle>Antonyms</VariantsTitle>
                            <VariantsWords>
                                {item.antonyms.map((word, index, arr) => (
                                    <VariantsLink onClick={handleClick} key={word}>
                                        {word}{index === arr.length - 1 ? '  ' : ','}
                                    </VariantsLink>
                                ))}
                            </VariantsWords>
                        </VariantsWrapper>
                    }

                </PartOfSpeech>
            ))}
        </>
    );
}

export default Meanings;