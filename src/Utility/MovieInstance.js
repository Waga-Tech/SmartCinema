// npm package from space STP clients?

import axios from "axios";

const movieInstance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

export{movieInstance}