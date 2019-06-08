<template>
  <div>
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
                  src="../assets/img/benji-b.jpg"
                  alt="Benji B"
                  class="modal-button"
                  data-target="modal-image1"
                >
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>Benji B</h4>
                <p>
                  Benji B is one of the UK's most respected DJs. Renowned worldwide for his radio shows and club sets alike,
                  he's amassed a fan base who have come to see him as a leader in the future music movement.
                </p>

                <router-link to="/DJ/Benji-B">
                  <span class="button is-link modal-button" data-target="modal-image1">Listen</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="card is-shady">
            <div class="card-image">
              <figure class="image is-4by4">
                <img
                  src="../assets/img/gilles-peterson.jpg"
                  alt="Gilles Peterson"
                  class="modal-button"
                  data-target="modal-image2"
                >
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>Gilles Peterson</h4>
                <p>
                  Gilles Peterson is a French-born broadcaster, DJ and record label owner in England. He has founded 
                  influential labels such as Acid Jazz and Talkin' Loud, and started his current label, Brownswood Recordings, in 2006.
                </p>
                <router-link to="/DJ/Gilles-Peterson">
                  <span class="button is-link modal-button" data-target="modal-image1">Listen</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.has-bg-img {
  background: url("../assets/img/dj.jpg") center center;
  background-size: cover;
}
</style>
