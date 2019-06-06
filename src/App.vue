<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <font-awesome-icon icon="compact-disc" size="lg"/>
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true">Benji B</span>
          <span aria-hidden="true">Gilles Peterson</span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">Benji B</a>
          <a class="navbar-item">Gilles Peterson</a>
        </div>

        <div class="navbar-end"></div>
      </div>
    </nav>

    <section class="hero is-link is-fullheight-with-navbar has-bg-img">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="box has-background-black">
            <h1 class="title">Playlists from every show and random selections</h1>
            <h2 class="subtitle">Specialist music player</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="columns features">
        <div class="column is-6">
          <div class="card is-shady">
            <div class="card-image">
              <figure class="image is-4by4">
                <img
                  src="./assets/img/benji-b.jpg"
                  alt="Benji B"
                  class="modal-button"
                  data-target="modal-image1"
                >
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>Benji B</h4>
                <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                <span class="button is-link modal-button" data-target="modal-image1">Image modal</span>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="card is-shady">
            <div class="card-image">
              <figure class="image is-4by4">
                <img
                  src="./assets/img/gilles-peterson.jpg"
                  alt="Gilles Peterson"
                  class="modal-button"
                  data-target="modal-image2"
                >
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>Gilles Peterson</h4>
                <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                <span class="button is-link modal-button" data-target="modal-image2">Image modal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column is-3 is-offset-2">
            <h2>
              <strong>Category</strong>
            </h2>
            <ul>
              <li>
                <a href="#">Lorem ipsum dolor sit amet</a>
              </li>
              <li>
                <a href="#">Vestibulum errato isse</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit amet</a>
              </li>
              <li>
                <a href="#">Aisia caisia</a>
              </li>
              <li>
                <a href="#">Murphy's law</a>
              </li>
              <li>
                <a href="#">Flimsy Lavenrock</a>
              </li>
              <li>
                <a href="#">Maven Mousie Lavender</a>
              </li>
            </ul>
          </div>
          <div class="column is-3">
            <h2>
              <strong>Category</strong>
            </h2>
            <ul>
              <li>
                <a href="#">Labore et dolore magna aliqua</a>
              </li>
              <li>
                <a href="#">Kanban airis sum eschelor</a>
              </li>
              <li>
                <a href="#">Modular modern free</a>
              </li>
              <li>
                <a href="#">The king of clubs</a>
              </li>
              <li>
                <a href="#">The Discovery Dissipation</a>
              </li>
              <li>
                <a href="#">Course Correction</a>
              </li>
              <li>
                <a href="#">Better Angels</a>
              </li>
            </ul>
          </div>
          <div class="column is-4">
            <h2>
              <strong>Category</strong>
            </h2>
            <ul>
              <li>
                <a href="#">Objects in space</a>
              </li>
              <li>
                <a href="#">Playing cards with coyote</a>
              </li>
              <li>
                <a href="#">Goodbye Yellow Brick Road</a>
              </li>
              <li>
                <a href="#">The Garden of Forking Paths</a>
              </li>
              <li>
                <a href="#">Future Shock</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="content has-text-centered">
          <p>
            <a class="icon" href="https://github.com/dansup/bulma-templates">
              <i class="fa fa-github"></i>
            </a>
          </p>
          <div class="control level-item">
            <a href="https://github.com/dansup/bulma-templates">
              <div class="tags has-addons">
                <span class="tag is-dark">Bulma Templates</span>
                <span class="tag is-info">MIT license</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
/* @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"); */
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
/* @import "../node_modules/bulma/css/bulma.css"; */
@import "./assets/css/hero.css";
@import "./assets/css/bulmaswatchlux.css";

.has-bg-img {
  background: url("./assets/img/hero-image.jpg") center center;
  background-size: cover;
}

.half-black {
  /* background: rgba(0, 0, 0, 0.5); */
  opacity: 20%;
}
</style>
