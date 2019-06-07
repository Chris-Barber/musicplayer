<template>
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
</template>

<script>
export default {
    name: "Header",
}
</script>