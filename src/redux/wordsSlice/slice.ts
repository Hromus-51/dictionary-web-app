import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { fetchWords } from './asyncActions'

export interface WordInterface {
    word: string,
    phonetic: string,
    phonetics: {
        text: string,
        audio: string,
    }[],
    meanings: {
        partOfSpeech: string,
        definitions: {
            definition: string,
            synonyms: string[],
            antonyms: string[],
            example: string
        }[],
        synonyms: string[],
        antonyms: string[]
    }[],
    sourceUrls: string[],
}

interface InitialState {
    word: WordInterface[];
    status: string;
}

const initialState: InitialState = {
    word: [],
    status: ''
}

export const wordSlice = createSlice({
    name: 'word',
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWords.pending, (state) => {
            console.log('Идет запрос');
            state.word = [];
            state.status = 'loading';
        })

        builder.addCase(fetchWords.fulfilled, (state, action) => {
            console.log('Запрос прошел удачно');
            state.word = action.payload;
            state.status = 'success';
        })

        builder.addCase(fetchWords.rejected, (state) => {
            console.log('Ошибка запроса')
            state.word = [];
            state.status = 'error';
        })
    }
})

export const selectWord = (state: RootState) => state.wordReducer.word;
export const selectStatus = (state: RootState) => state.wordReducer.status;

export const { reset } = wordSlice.actions;
export default wordSlice.reducer