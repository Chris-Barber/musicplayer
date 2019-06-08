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
  }
};
