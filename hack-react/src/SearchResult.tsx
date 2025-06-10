import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import {memo, useMemo} from "react";
import type {Album} from "./Album.ts";

const SearchResult = memo((
    {album, isFavorite, favor, unfavor}: {
        album: Album,
        isFavorite: boolean,
        favor: (album: Album) => void,
        unfavor: (album: Album) => void
    }
) => {

    const duration: string = useMemo(() => {
        const minutes = Math.floor(album.duration / 60);
        const hours = Math.floor(minutes / 60);

        return `${hours ? hours + 'h' : ''}${minutes % 60}m`;
    }, [album]);

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

            <br/>

            <span
                className="text-sm">{album.tracks.length} tracks - {duration}</span>
        </>
    )
});

export default SearchResult;