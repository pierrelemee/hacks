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
        <div className="album-preview">
            <img src={album.cover} style={{width: '250px'}}/>
            <div className="album-preview-details">
                <span>
                    <b>{album.title}</b>
                    <br/>
                    {album.artist}
                    <br/>
                    <span className="text-xs">{album.tracks.length} tracks - {duration}</span>
                </span>

                <button className="button"
                        title={isFavorite ? 'Add to favorites' : 'Remove from favorites'}
                        onClick={() => isFavorite ? unfavor(album) : favor(album)}
                >
                    {isFavorite ? <MdFavorite/> : <MdFavoriteBorder/>}
                </button>
            </div>
        </div>
    )
});

export default SearchResult;