import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

interface FetchUserParams {
    url: string;
    searchValue: string;
}

export const fetchWords = createAsyncThunk('word / fetchWordStatus', async (params: FetchUserParams) => {
    const { url, searchValue } = params;
    const { data } = await axios.get(`${url}${searchValue}`)
    return data;
});