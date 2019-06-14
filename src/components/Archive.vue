<template>
  <div>
    <div class="tabs is-small">
      <ul>
        <li
          v-bind:class="[ activeYear === year ? 'is-active' : '' ]"
          v-for="year in years"
          @click="clickYear(year)"
        >
          <a>{{year}}</a>
        </li>
      </ul>
    </div>

    <pulse-loader :loading="loading"></pulse-loader>
    <div class="card is-shady" v-if="!loading">
      <header class="card-header">
        <p class="card-header-title">Archive {{activeYear}}</p>
        <a class="card-header-icon">
          <span class="icon">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <article class="media" v-for="show in shows">
          <div class="media-content">
            <div class="content">
              <a href="#" @click="goToTracks(show.airDate)">
                <h4>{{ show.title }}</h4>
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
  name: "archive",
  components: {
    PulseLoader
  },
  data() {
    return {
      shows: [],
      years: [],
      activeYear: 0,
      loading: true
    };
  },
  props: ["dj"],
  created() {
    this.clickYear(new Date().getFullYear());
    this.fetchYears();
  },
  watch: {
    dj: function(val) {
      this.fetchYears();
      this.shows = [];
    }
  },
  methods: {
    clickYear(year) {
      this.loading = true;
      this.activeYear = year;
      return EpisodeService.getArchiveYear(this.dj, year).then(response => {
        this.shows = response.data;
        this.loading = false;
      });
    },
    fetchYears() {
      if (this.years.length === 0) {
        for (var i = 2009; i <= new Date().getFullYear(); i++) {
          this.years.push(i);
        }

        this.years.reverse();
      }
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