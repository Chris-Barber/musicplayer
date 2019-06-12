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
        <div class="card is-shady">
          <header class="card-header">
            <p class="card-header-title">{{episode.title}}</p>
            <a class="card-header-icon">
              <span class="icon">
                <i class="fa fa-angle-down"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            {{ episode.summary }}
            <br>
            {{episode.airDate | formatDate}}
            <hr>

            <article class="media" v-for="track in tracks">
              <figure class="media-left track__image">
                <p class="image is-64x64">
                  <img :src=track.thumbnailLink >
                </p>
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
    Benji
  },
  created() {
    this.fetchData();
  },
  data() {
    return {
      tracks: [],
      episode: {}
    };
  },
  computed: {
    djName: function() {
      return this.dj.replace("-", " ");
    },
    isBenjiB: function() {
      return this.dj.toLowerCase() === "benji-b";
    },
    isGillesPeterson: function() {
      return this.dj.toLowerCase() === "gilles-peterson";
    }
  },
  methods: {
    fetchData() {
      return EpisodeService.getTracks(this.dj, this.episodeDate).then(
        response => {
          this.tracks = response.data.tracks;
          this.episode = response.data.episode;
        }
      );
    }
  }
};
</script>

<style scoped>
.track__image {
  margin-top: 1rem;
}
</style>

