export const fetchMovie = async () => {
  try{
    const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=")
    const results = await response.json()
    return results.title
  }
  catch(error){
    console.error(error);
   
    }
  }