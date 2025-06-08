export class Album {
    title: string;
    artist: string;

    public constructor(artist: string, title: string) {
        this.artist = artist;
        this.title = title;
    }

    get id(): string {
        return `${this.artist}-${this.title}`;
    }

    equals(album: Album): boolean {
        return this.id === album.id;
    }
}
