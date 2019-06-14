<template>
  <div>
    <pulse-loader :loading="loading"></pulse-loader>
    <div class="card is-shady" v-if="!loading">
      <header class="card-header">
        <p class="card-header-title">Specials</p>
        <a class="card-header-icon">
          <span class="icon">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <article class="media" v-for="show in shows">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <a href="#" @click="goToTracks(show.airDate)">
                <strong>{{ show.title }}</strong>
              </a>
              <small>&nbsp;{{ show.airDate | formatDate }}</small>
              <br>
              <p>{{ show.summary}}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import EpisodeService from "../services/episode.service";
import Vue from "vue";
import moment from "moment";
import PulseLoader from "./PulseLoader.vue";

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD MMM YYYY");
  }
});

export default {
  name: "specials",
  components: {
    PulseLoader
  },
  data() {
    return {
      shows: [],
      loading: true
    };
  },
  props: ["dj"],
  created() {
    this.fetchData();
  },
  watch: {
    dj: function(val) {
      this.fetchData();
    }
  },
  methods: {
    fetchData() {
      return EpisodeService.getSpecials(this.dj).then(response => {
        this.shows = response.data;
        this.loading = false;
      });
    },
    goToTracks(episodeDate) {
      var formattedDate = moment(String(episodeDate)).format("YYYY-MM-DD");
      this.$router.push({
        name: "tracks",
        params: { dj: this.dj, episodeDate: formattedDate }
      });
    }
  }
};
</script>