const processMovie = movie => ({
    title: movie.Title
})

export const fetchMovies = async () => {
    const response = await fetch("http://www.omdbapi.com/?apikey=c05df044&s=rings")
    const results = await response.json()
    const resultsEnd = results.Search
    // return resultsEnd.map(processMovie)
    return resultsEnd
}