import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        isLoading: false
    },
    reducers: {
        addLoading: (state, action)=> {
            state.isLoading = true
        },
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload;
            state.isLoading = false
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload
        },
        addPopularMovies: (state,action) => {
            state.popularMovies = action.payload
        }
        
    },
})

export const { addNowPlayingMovies ,addTrailerVideo, addPopularMovies ,addLoading} = moviesSlice.actions;

export default moviesSlice.reducer;