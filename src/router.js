import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import DJ from "./components/DJ.vue";
import Tracks from "./components/Tracks.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    { path: '/DJ/:dj', name: 'dj', component: DJ, props: true },
    { path: '/DJ/:dj/:episodeDate', name: 'tracks', component: Tracks, props: true },
  ]
});
