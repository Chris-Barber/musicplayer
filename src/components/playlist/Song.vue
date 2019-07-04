<template>
   <article class="media" >
    <figure class="media-left track__image">
      <div class="image is-64x64">
        <img :src="track.thumbnailLink" @click="selectSong">
        <div class="overlay" @click="selectSong">
              <a href="#" class="icon" title="Play">
   <font-awesome-icon icon="play" size="xs" />   
              </a>
        </div>
      </div>
    </figure>
    <div class="media-content">
      <div class="content">
          <strong>{{ track.title}}</strong>
        <p>
          {{ track.artist}}
          <br>
          <small>{{ track.label }}</small>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import { mapGetters } from "vuex";
import { str } from "@/utils/aux-methods.js";

export default {
  name: "song",
  props: ["track"],
  data() {
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
    selectSong() {
      if (this.selected) {
        return;
      }

      if (this.inPlaylist) {
        this.$store.dispatch("changePlayingSong", {
          artist: str(this.track.artist),
          track: str(this.track.title)
        });
      } else {
        this.$store.dispatch("addOrPlaySong", {
          artist: str(this.track.artist),
          track: str(this.track.title),
          image: this.track.thumbnailLink
        });
        this.inPlaylist = true;
      }
    }
  }
};
</script>
<style lang="less">
@import (reference, less) "../../assets/styles/colors.less";

.track__image {
  margin-top: 1rem;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.3s ease;
  background-color:  white;
}

.image:hover .overlay {
  opacity: 1;
}

.icon {
  color: white;
  font-size: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
</style>
