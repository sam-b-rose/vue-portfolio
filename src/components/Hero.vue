<template>
  <section id="hero">
    <div class="hero is-primary header-image">
      <div class="hero-head">
        <nav-bar></nav-bar>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">{{ title }}</h1>
          <separator color="white"></separator>
          <h5 class="subtitle is-5">{{ subtitle }}</h5>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container has-text-centered">
          <a href="#" v-scroll-to="'#about'">
            <i class="fa fa-chevron-down scroll-down"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from './NavBar';

export default {
  name: 'hero',
  components: {
    NavBar,
  },
  data() {
    return {
      title: 'Portfolio',
      subtitle: 'making pretty things with pretty code',
    };
  },
  mounted() {
    sr.reveal('#hero .hero-body > .container *', 100);
    sr.reveal('#hero .hero-foot', 150);
  },
};
</script>

<style lang="scss" scoped>
  #hero {
    position: relative;
    height: 100vh;
    width: 100vw;
  }

  .header-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.49),rgba(0, 0, 0, 0.89)),url('../assets/img/good-vibes.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 50%;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .hero-body {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .title {
    text-transform: uppercase;
  }

  .scroll-down {
    font-size: 36px;
    opacity: 0.6;
    transition: all ease-in 0.15s;
    padding-bottom: 1rem;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  }
</style>
