<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <font-awesome-icon icon="compact-disc" size="lg"/>
      </router-link>

      <!-- https://stackoverflow.com/questions/41137114/im-trying-to-use-hamburger-menu-on-bulma-css-but-it-doesnt-work-what-is-wron -->
<!-- what is going on-->


      <a role="button" class="navbar-burger" data-target="Options" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    
     
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/DJ/Gilles-Peterson">Gilles Peterson</router-link>
        <router-link class="navbar-item" to="/DJ/Benji-B">Benji B</router-link>
      </div>

      <div class="navbar-end" id="Options">
        <router-link class="navbar-item" to="/DJ/Gilles-Peterson">Gilles Peterson</router-link>
        <router-link class="navbar-item" to="/DJ/Benji-B">Benji B</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>