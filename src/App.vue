<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Player />
      <div id="ytPlayer" />
    <Footer></Footer>
    
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Player from './components/player/Player.vue';

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Player
  }
};
</script>

<style>
/* @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"); */
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
/* @import "../node_modules/bulma/css/bulma.css"; */
@import "./assets/css/hero.css";
@import "./assets/css/bulmaswatchlux.css";

.half-black {
  /* background: rgba(0, 0, 0, 0.5); */
  opacity: 20%;
}

.dj__nav {
  margin-top: 1.5rem;
  padding-left: 1rem;
}

#ytPlayer {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
</style>
