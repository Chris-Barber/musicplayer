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
        <div class="card">
        <header class="card-header">
          <p class="card-header-title"> {{djName}} </p>
          <a class="card-header-icon">
            <span class="icon"> <i class="fa fa-angle-down"></i> </span>
          </a>
        </header>
        <div class="card-content">
          <div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a>@bulmaio</a>.
            <a>#css</a>
            <a>#responsive</a>
            <br> <small>11:09 PM - 1 Jan 2016</small> </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item">Save</a>
          <a class="card-footer-item">Edit</a>
          <a class="card-footer-item">Delete</a>
        </footer>
      </div>
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
        </ul>
      </div>
        <div v-if="activeTab === 1">
            <div class="card ">
          <header class="card-header">
            <p class="card-header-title"> Recent shows </p>
            <a class="card-header-icon">
              <span class="icon"> <i class="fa fa-angle-down"></i> </span>
            </a>
          </header>
          <div class="card-content">      
            <article class="media">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg">
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <!-- <p>
                      <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                      <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                    </p> -->
                    <strong>Marcos Valle</strong> <small> 18 July, 2018</small><br>
                    <p>Gilles is joined by Brazilian singer, songwriter and innovator Marcos Valle.</p>
                  </div>     
                </div>
              </article>
          </div>
        </div>
        </div>
        <div v-if="activeTab === 2">
            Content for tab two
        </div>
        
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "dj",
  components: {},
  data: function() {
    return {
      activeTab: 1
    };
  },
  computed: {
    djName: function() {
      return this.dj.replace("-", " ");
    }
  },
  props: ["dj"]
};
</script>

<style scoped>
.dj__nav {
  margin-top: 1.5rem;
}

.dj__shows {
  margin-bottom: 1.5rem;
}
</style>

