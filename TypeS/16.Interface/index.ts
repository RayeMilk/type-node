import { Vec2 } from "three";

interface Song {
    songName: string;
    artist: string;
    year: number;
    songinfo(songName: string, artist: string, year: number): string;
}

const song1: Song = {
    songName: "Shape of You",
    artist: "Ed Sheeran",
    year: 2017,
    songinfo: (songName, artist, year) => {
        return `The song ${songName} by ${artist} was released in ${year}`;
    }
}

console.log(song1.songinfo(song1.songName, song1.artist, song1.year));

interface Vehicle {
    start(): void;
    stop(): void;
}

const car: Vehicle = {
    start: () => console.log("Starting the car"),
    stop: () => console.log("Stopping the car")
}

car.start();
car.stop();

