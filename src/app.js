// Vendor Modules
import $ from 'jquery';
import _ from 'underscore';

// CSS
import './css/foundation.css';
import './css/style.css';

// Models
import Song from './models/song';
import SongList from './collections/song_list';

const songData = [
  {
    title: "Train Tracks",
    year: 2015,
    artist: "The Staves"
  },
  {
    title: "SOS",
    year: 2016,
    artist: "Joseph"
  },
  {
    title: "Bird Song",
    year: 2011,
    artist: "The Wailin Jennys"
  },
  {
    title: "Settle Down",
    year: 2011,
    artist: "Kimbra"
  },
  {
    title: "Body",
    year: 2009,
    artist: "Thao & The Get Down Stay Down"
  }
];

const songList = new SongList();
songData.forEach((song) => songList.add(new Song(song)));

$(document).ready( () => {
  const songTemplate = _.template($('#song-template').html());
  songList.forEach((song) => $('#song-list').append(songTemplate(song.attributes)));
});
