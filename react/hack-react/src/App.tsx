import './App.css'
import SearchResult from "./SearchResult.tsx";
import {useState} from "react";


type Album = {
    title: string,
    artist: string,
    favorite: boolean,
}

const albums = [
    {
        title: 'Rock action',
        artist: 'Mogwai',
        favorite: false,
    } as Album,
    {
        title: 'OK Computer',
        artist: 'Radiohead',
        favorite: true,
    } as Album,
    {
        title: 'Without you I\'m nothing',
        artist: 'Placebo',
        favorite: true,
    } as Album,
    {
        title: 'OK Cowboy',
        artist: 'Vitalic',
        favorite: false,
    } as Album,
];

type Search = {
    query: string;
    onlyFavorites: boolean;
}

function App() {
    const [search, setSearch] = useState<Search>({ query: "" , onlyFavorites: false });

  return (
    <>
      <div id="app">
          <h1>Albums</h1>

          <div className="search-filters">
              <h3>Search</h3>
              <form>
                  <div className="input-group">
                      <label>Album title</label>
                      <input
                          type="search"
                          placeholder={'Best of...'}
                          value={search.query}
                          onChange={(e) => setSearch({
                              ...search,
                              query: e.target.value,
                          })}
                      />
                  </div>


                  <div className="input-group">
                      <label>Only show favorites</label>
                      <input type="checkbox" onChange={(e) => setSearch({
                          ...search,
                          onlyFavorites: e.target.checked
                      })} ></input>
                  </div>
              </form>
          </div>

          <div className="search-results">
              <h4>Found 4 albums:</h4>

              <ul>
                  {
                      albums
                          // Apply `query` filter
                          .filter((album: Album) => album.title.toLowerCase().includes(search.query.toLowerCase()))
                          // Apply `onlyFavorites` filter
                          .filter((album: Album) => !search.onlyFavorites || album.favorite )
                          .map((album: Album) =>
                          (
                              <li key={`${album.artist}-${album.title}`}>
                              <SearchResult
                                  title={album.title}
                                  artist={album.artist}
                                  favorite={album.favorite}
                            />
                              </li>
                        )
                      )
                  }
              </ul>
          </div>
      </div>
    </>
  )
}

export default App
