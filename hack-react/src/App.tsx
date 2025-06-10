import './App.css'
import SearchResult from "./SearchResult.tsx";
import {useMemo, useState} from "react";
import type {Album} from "./Album.ts";
import {PiVinylRecord} from "react-icons/pi";

type Search = {
    query: string;
    onlyFavorites: boolean;
}

type tab = 'search' | 'add';

function App({albums}: { albums: Album[] }) {
    const [selectedTab, selectTab] = useState<tab>('search');
    const [search, setSearch] = useState<Search>({query: "", onlyFavorites: false});
    const [favorites, setFavorites] = useState<Map<string, boolean>>(new Map());

    console.log(selectedTab);

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
                <div className="navbar bg-base-100 shadow-sm">
                    <a className="btn btn-ghost text-xl">
                        <PiVinylRecord/>
                        My albums
                    </a>
                </div>

                <main>
                    <div role="tablist" className="tabs tabs-border">
                        <a role="tab" onClick={() => selectTab('search')}
                           className={`tab ${selectedTab == 'search' ? 'tab-active' : ''}`}>Search</a>
                        <a role="tab" onClick={() => selectTab('add')}
                           className={`tab ${selectedTab == 'add' ? 'tab-active' : ''}`}>Add an album</a>
                    </div>

                    {
                        selectedTab == 'search' &&
                        <section className="search">
                            <h2 className="text-3xl font-bold mb-3">Search</h2>

                            <div className="search-filters my-2">
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

                            <div className="search-results my-2">
                                <h3 className="text-2xl font-bold mb-3">Found {results.length} album{results.length > 1 ? 's' : ''}:</h3>

                                <div className="search-results-albums">
                                    {
                                        results.map((album: Album) =>
                                            (
                                                <SearchResult
                                                    key={`${album.artist}-${album.title}`}
                                                    album={album}
                                                    isFavorite={favorites.get(album.id) ?? false}
                                                    favor={favor}
                                                    unfavor={unfavor}
                                                />
                                            )
                                        )
                                    }
                                </div>
                            </div>
                        </section>
                    }

                    {
                        selectedTab == 'add' &&
                        <section>
                            <h2 className="text-3xl font-bold mb-3">Add a new album</h2>
                        </section>
                    }
                </main>
            </div>
        </>
    )
}

export default App
