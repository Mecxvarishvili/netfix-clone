const API = {
    baseAPI: async (path: string)=> {
        const res =  await fetch('http://localhost:8000/nf/' + path)
        return await res.json()
        
    },
    fetchMovies: async () => {
        return API.baseAPI("")
        
    },
    fetchMovieGenre: async (genre: string) => {
        return await API.baseAPI(`genre/${genre}`)
    },
    fetchMovieSearch: async (search: string) => {
        return await API.baseAPI(`search/${search}`)
    }
}

export default API