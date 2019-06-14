<template>
  <div>
    <div class="card is-shady">
      <header class="card-header">
        <p class="card-header-title">Statistcs</p>
      </header>
      <div class="card-content">
        <div class="content">
          <ol>
            <li>
              <a href="#" @click="goToTrackStats()">Most played tracks by year.</a>
            </li>
            <li>
              <a href="#" @click="goToArtistStats()">Most played artists by year.</a>
            </li>
          </ol>
        </div>
      </div>
    </div>

    <div v-if="stats=='track'">
      <stats-tracks :dj="dj"></stats-tracks>
    </div>

    <div v-if="stats=='artist'">
      <stats-artists :dj="dj"></stats-artists>
    </div>
  </div>
</template>
<script>
import StatsArtists from "./StatsArtists.vue";
import StatsTracks from "./StatsTracks.vue";

export default {
  name: "Stats",
  components: {
      StatsArtists,
      StatsTracks
  },
  props: ["dj"],
  data() {
    return {
      stats: ""
    };
  },
  methods: {
    goToTrackStats() {
      this.stats = "track";
    },
    goToArtistStats() {
      this.stats = "artist";
    }
  }
};
</script>
