<template>
  <section class="container">
    <div class="columns">
      <div class="column is-12">
        <div class="box dj__nav">
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
      <div class="column is-3"></div>
      <div class="column is-9">
        <div class="box content dj__shows">
          <article class="post">
            <h4>Bulma: How do you center a button in a box?</h4>
            <div class="media">
              <div class="media-left">
                <p class="image is-32x32">
                  <img src="http://bulma.io/images/placeholders/128x128.png">
                </p>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <a href="#">@jsmith</a> replied 34 minutes ago &nbsp;
                    <span class="tag">Question</span>
                  </p>
                </div>
              </div>
              <div class="media-right">
                <span class="has-text-grey-light">
                  <i class="fa fa-comments"></i> 1
                </span>
              </div>
            </div>
          </article>
          <article class="post">
            <h4>How can I make a bulma button go full width?</h4>
            <div class="media">
              <div class="media-left">
                <p class="image is-32x32">
                  <img src="http://bulma.io/images/placeholders/128x128.png">
                </p>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <a href="#">@red</a> replied 40 minutes ago &nbsp;
                    <span class="tag">Question</span>
                  </p>
                </div>
              </div>
              <div class="media-right">
                <span class="has-text-grey-light">
                  <i class="fa fa-comments"></i> 0
                </span>
              </div>
            </div>
          </article>
          <article class="post">
            <h4>TypeError: Data must be a string or a buffer when trying touse vue-bulma-tabs</h4>
            <div class="media">
              <div class="media-left">
                <p class="image is-32x32">
                  <img src="http://bulma.io/images/placeholders/128x128.png">
                </p>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <a href="#">@jsmith</a> replied 53 minutes ago &nbsp;
                    <span class="tag">Question</span>
                  </p>
                </div>
              </div>
              <div class="media-right">
                <span class="has-text-grey-light">
                  <i class="fa fa-comments"></i> 13
                </span>
              </div>
            </div>
          </article>
          <article class="post">
            <h4>How to vertically center elements in Bulma?</h4>
            <div class="media">
              <div class="media-left">
                <p class="image is-32x32">
                  <img src="http://bulma.io/images/placeholders/128x128.png">
                </p>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <a href="#">@brown</a> replied 3 hours ago &nbsp;
                    <span class="tag">Question</span>
                  </p>
                </div>
              </div>
              <div class="media-right">
                <span class="has-text-grey-light">
                  <i class="fa fa-comments"></i> 2
                </span>
              </div>
            </div>
          </article>
          <article class="post">
            <h4>I'm trying to use hamburger menu on bulma css, but it doesn't work. What is wrong?</h4>
            <div class="media">
              <div class="media-left">
                <p class="image is-32x32">
                  <img src="http://bulma.io/images/placeholders/128x128.png">
                </p>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <a href="#">@hamburgler</a> replied 5 hours ago &nbsp;
                    <span class="tag">Question</span>
                  </p>
                </div>
              </div>
              <div class="media-right">
                <span class="has-text-grey-light">
                  <i class="fa fa-comments"></i> 2
                </span>
              </div>
            </div>
          </article>
          <article class="post">
            <h4>How to make tiles wrap with Bulma CSS?</h4>
            <div class="media">
              <div class="media-left">
                <p class="image is-32x32">
                  <img src="http://bulma.io/images/placeholders/128x128.png">
                </p>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <a href="#">@rapper</a> replied 3 hours ago &nbsp;
                    <span class="tag">Question</span>
                  </p>
                </div>
              </div>
              <div class="media-right">
                <span class="has-text-grey-light">
                  <i class="fa fa-comments"></i> 2
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "dj",
  components: {},
  computed: {
    djName: function() {
      return this.dj.replace("-", " ");
    }
  },
  props: ["dj"]
};
</script>

<style scoped>
.media-left img {
  border-radius: 50%;
}
.media-content p {
  font-size: 14px;
  line-height: 2.3;
  font-weight: 700;
  color: #8f99a3;
}
article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6eaee;
}
article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
.menu-list li {
  padding: 5px;
}
.dj__nav {
    margin-top: 1rem;
}

.dj__shows {
    margin-bottom: 1rem;
}
</style>

