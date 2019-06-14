<template>
  <div>
    <pulse-loader :loading="loading"></pulse-loader>
    <div class="card is-shady" v-if="!loading">
      <header class="card-header">
        <p class="card-header-title">Most played tracks of {{year}}</p>
        <a class="card-header-icon">
          <span class="icon">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <table class="table is-striped">
          <thead>
            <tr>
              <th>Plays</th>
              <th>Track</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="stat in stats">
              <td>
                <strong>{{stat.timePlayed}}</strong>
              </td>
              <td>{{stat.title}} - {{stat.artist}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import EpisodeService from "../services/episode.service";
import PulseLoader from "./PulseLoader.vue";

export default {
  name: "StatsTracksDetail",
  components: {
    PulseLoader
  },
  props: ["year", "dj"],
  created() {
    this.fetchData();
  },
  data() {
    return {
      stats: [],
      loading: true
    };
  },
  methods: {
    fetchData() {
      if (this.year != "all time") {
        return EpisodeService.getStatsTracksYear(this.dj, this.year).then(
          response => {
            this.stats = response.data;
            this.loading = false;
          }
        );
      } else {
        return EpisodeService.getStatsTracksAllTime(this.dj).then(response => {
          this.stats = response.data;
          this.loading = false;
        });
      }
    }
  }
};
</script>
