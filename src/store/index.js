import Vuex from 'vuex';
import './initialize.js';

const store = new Vuex.Store({
  state: {
    playing: 0,
    songs: []
  },
  getters: {
    hasSong (state) {
      return state.songs && state.songs.length > 0;
    },
    hasPrevSong (state) {
      return state.playing > 0;
    },
    hasNextSong (state) {
      const playingSong = state.playing + 1;
      const maxSong = state.songs.length;

      return playingSong < maxSong;
    },
    searchSongByNameAndArtist (state) {
      return (name, artist) => state.songs.find(song => song.track === name && song.artist === artist);
    },
    searchSongIndexByNameAndArtist (state) {
      return (name, artist) => state.songs.findIndex(song => song.track === name && song.artist === artist);
    },
    searchSongByYoutubeId (state) {
      return (youtubeId) => state.songs.find(song => song.youtubeId === youtubeId);
    },
    searchSongIndexByYoutubeId (state) {
      return (youtubeId) => state.songs.findIndex(song => song.youtubeId === youtubeId);
    },
    playlist (state) {
      return state.songs;
    },
    playlistStatus (state) {
      const actualSong = state.playing + 1;
      const numSongs = state.songs.length;

      return `${actualSong} / ${numSongs}`;
    },
    playing (state) {
      return state.songs[state.playing] || {};
    },
    imagePlaying (state) {
      const playing = store.getters.playing;

      return playing ? playing.image || playing.thumbnail || '' : '';
    }
  },
  mutations: {
    addSong (state, song) {
      state.songs.push(song);
    },
    addPlaylistSong (state, song, i) {
      const numSongs = state.songs.length-1;
      state.songs.splice(numSongs+i,0,song);
    },
    removeSong (state, index) {
      if (index === state.playing && state.playing > 0) {
        state.playing--;
      }
      state.songs.splice(index, 1);
    },
    prevSong (state) {
      state.playing--;
    },
    nextSong (state) {
      state.playing++;
    },
    playSong (state, num) {
      state.playing = num;
    }
  },
  actions: {
    addPlaylist(context, tracks){

      debugger;
      var i;
      for (i = 0; i < tracks.length; i++) { 

        let song = tracks[i];
        const query = buildSearchQuery(song.artist, song.title);

        this.$youtube.search(query).then(results => {
          console.log(i);
          const youtubeId = results[0].id.videoId;
          const thumbnail = results[0].snippet.thumbnails.high.url;
          const artist = song.artist;
          const track = song.title;
          const image = song.thumbnailLink;
          context.commit('addPlaylistSong', { artist, track, image, youtubeId, thumbnail }, i);
        });
      }

    },
    switchSong (context, { artist, track, image, youtubeId }) {
      
      const query = buildSearchQuery(artist, track);

      this.$youtube.search(query).then(results => {
        const youtubeId = results[0].id.videoId;
        const thumbnail = results[0].snippet.thumbnails.high.url;

        let index = youtubeId
        ? context.getters.searchSongIndexByYoutubeId(youtubeId)
        : context.getters.searchSongIndexByNameAndArtist(track, artist);

        if (index === -1) {
          context.commit('addSong', { artist, track, image, youtubeId, thumbnail });
        }
          
        index = youtubeId
        ? context.getters.searchSongIndexByYoutubeId(youtubeId)
        : context.getters.searchSongIndexByNameAndArtist(track, artist);

        if (context.getters.playing.youtubeId !== youtubeId) {
          context.commit('playSong', index);
        }
        
      });

    },
    addOrPlaySong (context, { artist, track, image }) {
      
      if (context.getters.searchSongByNameAndArtist(track, artist)) {
        return;
      }

      const query = buildSearchQuery(artist, track);

      this.$youtube.search(query).then(results => {
        const youtubeId = results[0].id.videoId;
        const thumbnail = results[0].snippet.thumbnails.high.url;
        context.commit('addSong', { artist, track, image, youtubeId, thumbnail });
      });
    },
    changePlayingSong (context, { artist, track, youtubeId }) {

      const index = youtubeId
        ? context.getters.searchSongIndexByYoutubeId(youtubeId)
        : context.getters.searchSongIndexByNameAndArtist(track, artist);

      if (index !== -1) {
        context.commit('playSong', index);
      }
    },
    deleteSong (context, { artist, track, youtubeId }) {
      const index = youtubeId
        ? context.getters.searchSongIndexByYoutubeId(youtubeId)
        : context.getters.searchSongIndexByNameAndArtist(track, artist);

      if (index !== -1) {
        context.commit('removeSong', index);
      }
    },
    playPrevSong (context) {
      if (context.getters.hasPrevSong) {
        context.commit('prevSong');
      }
    },
    playNextSong (context) {
      if (context.getters.hasNextSong) {
        context.commit('nextSong');
      }
    }
  }
});

const buildSearchQuery = (artist, track) => {
  let aux = artist.toLowerCase();
  if (aux === '[unknown]' || track.toLowerCase().includes(aux)) artist = '';

  return `${artist} ${track}`;
};

export default store;
