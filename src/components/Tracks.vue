<template>
  <section class="container">
    <div class="columns">
      <div class="column is-12">
        <div class="dj__nav">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="#">DJ</a>
              </li>
              <li>
                <router-link :to="{ name: 'dj', params: { dj: dj }}">{{ djName }}</router-link>
              </li>
              <li class="is-active">
                <a href="#" aria-current="page">{{episode.airDate | formatDate}}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-3">
        <div v-if="isBenjiB">
          <benji/>
        </div>
        <div v-if="isGillesPeterson">
          <gilles/>
        </div>
      </div>
      <div class="column is-9">
        <pulse-loader :loading="loading"></pulse-loader>
        <div class="card is-shady" v-if="!loading">
          <header class="card-header">
            <p class="card-header-title">{{episode.title}}</p>
            <a class="card-header-icon">
              <span class="icon">
                <i class="fa fa-angle-down"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="columns">
              <div class="column is-8">
                {{ episode.summary }}
                <br>
                {{episode.airDate | formatDate}}
              </div>
              <div class="column is-4">
                <a class="button is-link is-rounded" @click="playEpisode">{{ playButtonText }}</a>
              </div>
            </div>

            <hr>

            <song v-for="(track, i) in tracks" :track="track" 
            @selectSong="selectSong($event, i)" :key="track.id"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EpisodeService from "../services/episode.service";
import Vue from "vue";
import moment from "moment";
import Benji from "./Benji";
import Gilles from "./Gilles";
import PulseLoader from "./PulseLoader.vue";
import Song from "./playlist/Song";
import { mapGetters } from "vuex";
import { str } from "@/utils/aux-methods.js";

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD MMM YYYY");
  }
});

export default {
  name: "tracks",
  props: ["dj", "episodeDate"],
  components: {
    Gilles,
    Benji,
    PulseLoader,
    Song
  },
  created() {
    this.fetchData();
  },
  data() {
    return {
      tracks: [],
      track: {},
      episode: {},
      loading: true,
      inPlaylist: false
    };
  },
  computed: {
        ...mapGetters(["playing", "hasSong"]),
    selected() {
      return this.playing.youtubeId === this.track.youtubeId;
    },
    djName: function() {
      return this.dj.replace("-", " ");
    },
    isBenjiB: function() {
      return this.dj.toLowerCase() === "benji-b";
    },
    isGillesPeterson: function() {
      return this.dj.toLowerCase() === "gilles-peterson";
    },
    playButtonText: function() {
      return this.inPlaylist ? "Now playing" : "Play all";
    }
  },
  methods: {
    selectSong(e, i) {

      this.track = this.tracks[i];

      if (this.selected) {        
        return;
      }

      if (this.inPlaylist) {
        this.$store.dispatch("changePlayingSong", {
          artist: str(this.track.artist),
          track: str(this.track.title)          
        });
      } else {                
        this.$store.dispatch("switchSong", {
          artist: str(this.track.artist),
          track: str(this.track.title),
          image: this.track.thumbnailLink          
        });                    
      }       
    },
    playEpisode() {
      if (this.inPlaylist) {
        return;
      }

      this.$store.dispatch("addPlaylist", this.tracks);

      // this.tracks.forEach(track => {
      //   this.$store.dispatch("addOrPlaySong", {
      //     artist: str(track.artist),
      //     track: str(track.title),
      //     image: track.thumbnailLink
      //   });
      // });

      this.inPlaylist = true;
    },
    fetchData() {
      return EpisodeService.getTracks(this.dj, this.episodeDate).then(
        response => {
          this.tracks = response.data.tracks;

// TODO - Is this needed?
          this.tracks.forEach(element => {
            element.youtubeId = "1PrWA4C8eLw";
          });

          this.episode = response.data.episode;
          this.loading = false;
        }
      );
    }
  }
};
</script>


