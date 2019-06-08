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

    <div class="card is-shady">
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
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <a href="#" @click="goToTracks(show.airDate)"><strong>{{ show.title }}</strong></a> 
              <small>{{ show.airDate | formatDate }}</small>
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

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD MMM YYYY");
  }
});

export default {
  name: "archive",
  data() {
    return {
      shows: [],
      years: [],
      activeYear: 0
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
      this.activeYear = year;
      return EpisodeService.getArchiveYear(this.dj, year).then(response => {
        this.shows = response.data;
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