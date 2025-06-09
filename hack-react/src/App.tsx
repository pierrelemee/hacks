import './App.css'
import SearchResult from "./SearchResult.tsx";
import {useMemo, useState} from "react";
import type {Album} from "./Album.ts";

type Search = {
    query: string;
    onlyFavorites: boolean;
}

function App({albums}: { albums: Album[] }) {
    const [search, setSearch] = useState<Search>({query: "", onlyFavorites: false});
    const [favorites, setFavorites] = useState<Map<string, boolean>>(new Map());

    const favor = (album: Album) => setFavorites(new Map([...favorites.entries(), [album.id, true]]));
    const unfavor = (album: Album) => setFavorites(new Map([...favorites.entries(), [album.id, false]]));

    const results = useMemo(
        () =>
            albums
                // Apply `query` filter
                .filter((album: Album) => album.title.toLowerCase().includes(search.query.toLowerCase()))
                // Apply `onlyFavorites` filter
                .filter((album: Album) => !search.onlyFavorites || favorites.get(album.id)),
        [albums, search, favorites]
    );

    return (
        <>
            <div id="app">
                <h1 className="text-3xl font-bold">Albums</h1>

                <div className="search-filters">
                    <h3 className="text-2xl font-bold my-2">Search</h3>
                    <form>
                        <div className="input-group">
                            <label>Album title</label>
                            <input
                                className="input"
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
                            })}></input>
                        </div>
                    </form>
                </div>

                <div className="search-results">
                    <h4>Found {results.length} album{results.length > 1 ? 's' : ''}:</h4>

                    <ul>
                        {
                            results.map((album: Album) =>
                                (
                                    <li key={`${album.artist}-${album.title}`}>
                                        <SearchResult
                                            album={album}
                                            isFavorite={favorites.get(album.id) ?? false}
                                            favor={favor}
                                            unfavor={unfavor}
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
