import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch: false,
        gptMovies: null,
        movieResults: null, 
    },
    reducers:{
        toggleGptSearchView : (state,action)=> {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action)=> {
            const  { movieResults} = action.payload
            state.movieResults = movieResults;
        }
    }
})

export const {toggleGptSearchView, addGptMovieResult } = gptSlice.actions
export default gptSlice.reducer