<template>
  <div>
      <stats-tracks-detail :year="'all time'" :dj="dj"></stats-tracks-detail>
    <div v-for="year in years">
      <stats-tracks-detail :year="year" :dj="dj"></stats-tracks-detail>
    </div>
  </div>
</template>
<script>
import StatsTracksDetail from "./StatsTracksDetail.vue";
export default {
  name: "StatsTracks",
  components: {
    StatsTracksDetail
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
