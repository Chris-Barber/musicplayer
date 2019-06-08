<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <font-awesome-icon icon="compact-disc" size="lg"/>
      </router-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <router-link to="/DJ/Gilles-Peterson">
          <span aria-hidden="true">Gilles Peterson</span>
        </router-link>
        <router-link to="/DJ/Benji-B">
          <span aria-hidden="true">Benji B</span>
        </router-link>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/DJ/Gilles-Peterson">Gilles Peterson</router-link>
        <router-link class="navbar-item" to="/DJ/Benji-B">Benji B</router-link>
      </div>

      <div class="navbar-end"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>