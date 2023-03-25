const API = {
    baseAPI: async (path: string)=> {
        const res =  await fetch('http://localhost:8000/nf/' + path)
        return await res.json()
        
    },
    fetchMovies: async () => {
        return API.baseAPI("")
        
    },
    fetchMovieGenre: (genre: string) => {
        return API.baseAPI(`genre/${genre}`)
    }
}

export default API