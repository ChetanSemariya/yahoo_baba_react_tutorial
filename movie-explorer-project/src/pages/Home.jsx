import { useState, useEffect, useRef} from 'react'
import MovieList from '../components/MovieList'

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const fetchMovies = async(query) => {
        setLoading(true);
        const res = await fetch(`http://www.omdbapi.com/?apikey=c9765b8d&s=${query}`)
        const data = await res.json();
        console.log(data);
        setMovies(data.Search || []) // agar value nahi aati hai to empty arr set hojaye
        setLoading(false);
    }

    useEffect(() => {
        fetchMovies("Thor")
    }, [])

    // handle search function
    const handleSearch = (e) => {
      e.preventDefault();
      const query = inputRef.current.value.trim();
      if(query) {
        fetchMovies(query);
      }
    }

    return (
        <div className="home">
        <form onSubmit={handleSearch}>
          <input ref={inputRef} className="searchInput" placeholder="Search for a movie..." />
          <button type="submit">Search 🔎</button>
        </form>

        {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
        
      </div>
    )
}