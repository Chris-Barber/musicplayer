<template>
  <section class="container">
    <div class="columns">
      <div class="column is-12">
        <div class="dj__nav">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="#">DJ</a>
              </li>
              <li class="is-active">
                <a href="#" aria-current="page">{{djName}}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-3">
        <div v-if="isBenjiB">
          <benji/>
        </div>
        <div v-if="isGillesPeterson">
          <gilles/>
        </div>
        <MixTape/>
      </div>
      <div class="column is-9">
        <div class="tabs">
          <ul>
            <li v-bind:class="[ activeTab === 1 ? 'is-active' : '' ]">
              <a @click="activeTab=1">Recent shows</a>
            </li>
            <li v-bind:class="[ activeTab === 2 ? 'is-active' : '' ]">
              <a @click="activeTab=2">All shows</a>
            </li>
            <li v-bind:class="[ activeTab === 3 ? 'is-active' : '' ]">
              <a @click="activeTab=3">Specials</a>
            </li>
            <li v-bind:class="[ activeTab === 4 ? 'is-active' : '' ]">
              <a @click="activeTab=4">Stats</a>
            </li>
          </ul>
        </div>
        <div v-if="activeTab === 1">
          <recent :dj="dj"/>
        </div>
        <div v-if="activeTab === 2">
          <archive :dj="dj"/>
        </div>
        <div v-if="activeTab === 3">
          <specials :dj="dj"/>
        </div>
        <div v-if="activeTab === 4">
          <stats :dj="dj"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Recent from "./Recent";
import Archive from "./Archive";
import Specials from "./Specials";
import Benji from "./Benji";
import Gilles from "./Gilles";
import MixTape from "./MixTape";
import Stats from "./Stats";

export default {
  name: "dj",
  components: {
    Recent,
    Archive,
    Specials,
    Gilles,
    Benji,
    MixTape,
    Stats
  },
  data: function() {
    return {
      activeTab: 1
    };
  },
  watch: {
    '$route.params.dj': function (dj) {
      this.activeTab = 1;
    }
  },
  computed: {
    djName: function() {
      return this.dj.replace("-", " ");
    },
    isBenjiB: function() {
      return this.dj.toLowerCase() === "benji-b";
    },
    isGillesPeterson: function() {
      return this.dj.toLowerCase() === "gilles-peterson";
    }
  },
  props: ["dj"]
};
</script>

<style scoped>
.dj__shows {
  margin-bottom: 1.5rem;
}
</style>

