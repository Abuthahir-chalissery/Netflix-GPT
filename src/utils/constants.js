export const LOGO = "assets/Netflix_Logo.png"
export const AVATAR_URL = "assets/avatar_logo.jpg"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
    }
};




// Images
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

export const SUPPORTED_LANGUAGES = [
  {identifier:"en",name:"English"},
  {identifier:"ml",name:"Malayalam"},
  {identifier:"hn",name:"Hindi"},
  {identifier:"ar",name:"Arabic"},
]



export const GEMINI_KEY = import.meta.env.VITE_GEMINI_KEY;