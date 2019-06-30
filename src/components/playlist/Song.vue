<template>
  <div>
    <figure class="media-left track__image">
      <p class="image is-64x64">
        <img :src="track.thumbnailLink">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <a @click="selectSong">
          <strong>{{ track.title}}</strong>
        </a>
        <p>
          {{ track.artist}}
          <br>
          <small>{{ track.label }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { str } from '@/utils/aux-methods.js';

export default {
  name: "song",
  props: ["track"],
  data () {
    return {
      inPlaylist: false
    };
  },
  computed: {
    ...mapGetters(["playing"]),
    selected() {
      return this.playing.youtubeId === this.track.youtubeId;
    }
  },
  methods: {
    selectSong () {
      if (this.selected) {
        return;
      }

      if (this.inPlaylist) {
        this.$store.dispatch('changePlayingSong', { 'artist': str(this.track.artist), 'track': str(this.track.title) });
      } else {
        this.$store.dispatch('addOrPlaySong', { 'artist': str(this.track.artist), 'track': str(this.track.title), 'image': this.track.thumbnailLink });
        this.inPlaylist = true;
      }
    }
  }
};
</script>
