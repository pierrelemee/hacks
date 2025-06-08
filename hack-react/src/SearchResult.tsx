import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import {memo} from "react";
import type {Album} from "./Album.ts";

const SearchResult = memo((
    {album, isFavorite, favor, unfavor}: {
        album: Album,
        isFavorite: boolean,
        favor: (album: Album) => void,
        unfavor: (album: Album) => void
    }
) => {

    console.log(`Result: ${album.id}`);

    return (
        <>
            <>
                <b>{album.title}</b> ({album.artist})
            </>

            <button
                title={isFavorite ? 'Add to favorites' : 'Remove from favorites'}
                onClick={() => isFavorite ? unfavor(album) : favor(album)}
            >
                {isFavorite ? <MdFavorite/> : <MdFavoriteBorder/>}
            </button>
        </>
    )
});

export default SearchResult;