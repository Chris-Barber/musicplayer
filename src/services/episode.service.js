import Vue from "vue";

export default {
  getRecent(dj) {
    return Vue.http.get(
      "https://tracklisterapi.azurewebsites.net/api/dj/" + dj + "/episodes/recent"
    );
  },

  getSpecials(dj) {
    return Vue.http.get(
      "https://tracklisterapi.azurewebsites.net/api/dj/" + dj + "/episodes/specials"
    );
  },

  getTracks(dj, episodeDate) {
    return Vue.http.get(
      "https://tracklisterapi.azurewebsites.net/api/dj/" + dj + "/episodes/tracks/" + episodeDate
    );
  },

  getArchiveYear(dj, year) {
    return Vue.http.get(
      "https://tracklisterapi.azurewebsites.net/api/dj/" + dj + "/episodes/year/" + year
    );
  },

  getStatsTracksYear(dj, year) {
    return Vue.http.get(
      "https://tracklisterapi.azurewebsites.net/api/dj/" + dj + "/stats/tracksof/year/" + year
    );
  },

  getStatsTracksAllTime(dj) {
    return Vue.http.get(
      "https://tracklisterapi.azurewebsites.net/api/dj/" + dj + "/stats/tracksof/alltime"
    );
  },

  getStatsArtistsYear(dj, year) {
    return Vue.http.get(
      "https://tracklisterapi.azurewebsites.net/api/dj/" + dj + "/stats/artistsof/year/" + year
    );
  },

  getStatsArtistsAllTime(dj) {
    return Vue.http.get(
      "https://tracklisterapi.azurewebsites.net/api/dj/" + dj + "/stats/artistsof/alltime"
    );
  },

};
