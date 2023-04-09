import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
//==========================================
import {
    SearchEl, SearchForm, Input,
    SearchIcon, AlertMessage
} from './styled-components';
import { setSearchValue, selectSearch } from '../../redux/searchSlice/slice';
import { reset } from '../../redux/wordsSlice/slice';
import { useAppDispatch } from '../../redux/store';
import { fetchWords } from '../../redux/wordsSlice/asyncActions';
import { url } from '../../API/url';
//==========================================
import searchIcon from '../../assets/images/icon-search.svg';

const Search = () => {
    const dispatch = useAppDispatch();
    const searchValue = useSelector(selectSearch);
    const [visibleAlert, setVisibleAlert] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus()
        // ======================
        const searchValue = 'keyboard';
        dispatch(setSearchValue(searchValue))
        dispatch(fetchWords({ url, searchValue }));
    }, [])

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        dispatch(reset());
        if (searchValue === '') {
            setVisibleAlert(true);
        } else {
            setVisibleAlert(false);
            dispatch(fetchWords({ url, searchValue }));
        }
    }

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatch(setSearchValue(e.target.value))
    }

    return (
        <SearchEl>
            <SearchForm onSubmit={handleSubmit}>
                <Input
                    ref={inputRef}
                    onChange={handleOnChange}
                    value={searchValue}
                    alert={!visibleAlert}
                />
                <SearchIcon src={searchIcon} alt='searchIcon' />
            </SearchForm>
            <AnimatePresence>
                {visibleAlert &&
                    <AlertMessage
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.1,
                        }}
                    >
                        Whoops, can’t be empty…
                    </AlertMessage>}
            </AnimatePresence>
        </SearchEl>
    );
}

export default Search;