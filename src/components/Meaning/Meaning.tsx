import { useRef } from 'react';
//==========================================
import {
    MeaningEl, Phonetics, Writing,
    Word, Phonetic, ButtonPlay, Source,
    SourceWrapper, SourceTitle,
} from './styled-components';
import Meanings from './Meanings';
import SourceList from './Source';
//==========================================
import iconPlay from '../../assets/images/icon-play.svg';
import iconPlayHover from '../../assets/images/icon-play-hover.svg';
//==========================================
import { WordInterface } from '../../redux/wordsSlice/slice';

const Meaning: React.FC<{ words: WordInterface[] }> = ({ words }) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const [{ word, phonetic, phonetics, meanings, sourceUrls }] = words;

    const audio = phonetics.filter(e => e.audio !== '').map(e => e.audio);
    const uk = audio.find(e => e.endsWith('uk.mp3'))
    const us = audio.find(e => e.endsWith('us.mp3'))
    const sortAudio = uk || us

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <MeaningEl>

            <Phonetics>
                <Writing>
                    <Word>{word}</Word>
                    {phonetic && <Phonetic>{phonetic}</Phonetic>}
                </Writing>
                {sortAudio &&
                    <ButtonPlay
                        iconPlay={iconPlay}
                        iconPlayHover={iconPlayHover}
                        onClick={playAudio}>
                    </ButtonPlay>
                }
                <audio ref={audioRef} src={sortAudio} />
            </Phonetics>

            <Meanings meanings={meanings} />

            <Source>
                <SourceWrapper>
                    <SourceTitle>Source</SourceTitle>
                    <SourceList sourceUrls={sourceUrls} />
                </SourceWrapper>
            </Source>

        </MeaningEl>
    );
}

export default Meaning;


