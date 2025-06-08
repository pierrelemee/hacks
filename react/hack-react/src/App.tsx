import './App.css'
import SearchResult from "./SearchResult.tsx";
import {useMemo, useState} from "react";
import type {Album} from "./Album.ts";

type Search = {
    query: string;
    onlyFavorites: boolean;
}

function App({albums}: {albums: Album[]}) {
    const [search, setSearch] = useState<Search>({ query: "" , onlyFavorites: false });

    const results = useMemo(
        () =>
            albums
                // Apply `query` filter
                .filter((album: Album) => album.title.toLowerCase().includes(search.query.toLowerCase()))
                // Apply `onlyFavorites` filter
                .filter((album: Album) => !search.onlyFavorites || album.favorite),
        [albums, search]
    );




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
                      results.map((album: Album) =>
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
