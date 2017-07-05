"use strict";

import Track from './Track';

export default class Playlist {
    constructor() {
        this._tracks = [];
    }

    get tracks() {
        return this._tracks;
    }

    addTrack(src, name = '') {
        const track = new Track(src, name);
        this.tracks.push(track);

        return this;
    }

    addTrackList(list) {
        list.forEach((track) => {
            if(typeof track === 'string') {
                console.log('str', track);
                this.addTrack(track);
            } else if(typeof track === 'object') {
                const { src, name } = track;
                console.log('obj', src, name);
                this.addTrack(src, name);
            }
        });
    }
}