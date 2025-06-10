import {Album} from "./Album";
import {plainToInstance} from "class-transformer";
import {default as data} from "./albums.json"

export const albums = plainToInstance(Album, data);