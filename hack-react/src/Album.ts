import type {Track} from "./Track.ts";
import {Expose} from "class-transformer";

export class Album {
    @Expose({name: 'id'})
    protected _id: string;
    title: string;
    artist: string;
    cover?: string;
    tracks: Track[];

    public constructor(id: string, artist: string, title: string) {
        this._id = id;
        this.artist = artist;
        this.title = title;
        this.cover = undefined;
        this.tracks = [];
    }

    get id(): string {
        return this._id;
    }

    equals(album: Album): boolean {
        return this._id === album._id;
    }

    get duration(): number {
        return this.tracks.reduce((sum, track) => sum + (track.duration ?? 0), 0)
    }
}
