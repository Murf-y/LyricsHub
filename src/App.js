import Header from "./components/header";
import SearchBar from "./components/search_bar";
import Footer from "./components/footer";
import SongCard from "./components/song_card";
import LoadingSpinner from "./components/loading_spinner";

import { useState} from "react";

function App() {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(search === "") {
      setSongs([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError("");
    handleSearchApiCall(search);
  }

  const handleSearchApiCall = (search) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        'X-RapidAPI-Host': 'genius.p.rapidapi.com'
      }
    };
    
    const searchTerm = search.replace(/\s/g, '+');
    fetch(`https://genius.p.rapidapi.com/search?q=${searchTerm}`, options)
      .then(response => response.json())
      .then(response => {
        setSongs(response.response.hits);
        setLoading(false);
      })
      .catch(err => {
        setError("Something went wrong, check your search term or connection");
        setLoading(false);
      });
  }

  const handleClickSong = (song) => {
    openInNewTab(song.url);
  }
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }


  return (
    <div className="App">
      <Header />
      <SearchBar onSubmit = {handleSubmit} onChange={handleSearch} />
      { 
        error === "" ?

        loading ? 
          <LoadingSpinner /> :
          songs.length === 0 ? 
            <h1> </h1>:
            <div className="song-list">
            {songs.map(song => (
              <SongCard key={song.result.id} song={song.result} callBackOnClick={handleClickSong}/>
            ))}
            </div>
        :
        <div style={{color:"var(--primary-color)", textAlign:"center", marginTop:"2rem"}}>{error}</div>
      }
      
      <Footer />
    </div>
  );
}

export default App;
