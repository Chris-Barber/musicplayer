<template>
  <div>
      <stats-artists-detail :year="'all time'" :dj="dj"></stats-artists-detail>
    <div v-for="year in years">
      <stats-artists-detail :year="year" :dj="dj"></stats-artists-detail>
    </div>
  </div>
</template>
<script>
import StatsArtistsDetail from "./StatsArtistsDetail.vue";
export default {
  name: "StatsArtists",
  components: {
    StatsArtistsDetail
  },
  props: ["dj"],
  data() {
    return {
      years: []
    };
  },
  created() {
    this.fetchYears();
  },
  methods: {
    fetchYears() {
      if (this.years.length === 0) {
        for (var i = 2009; i <= new Date().getFullYear(); i++) {
          this.years.push(i);
        }

        this.years.reverse();
      }
    }
  }
};
</script>
