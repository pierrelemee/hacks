import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import {memo} from "react";

const SearchResult = memo((
    { title, artist, favorite} :{ title: string, artist: string, favorite: boolean }
) => {

    console.log(`Result: ${artist} - ${title}`);

  return (
      <>
          <>
              <b>{ title }</b> ({ artist })
          </>

          <span>
              {favorite ? <MdFavorite/> : <MdFavoriteBorder/>}
          </span>
      </>
)});

export default SearchResult;