<template>
  <section id="fork">
      <div class="hero is-primary">
        <div class="hero-body has-text-centered">
          <h2 class="title is-3">
            Want to Vue the code for this portfolio?
          </h2>
          <separator color="white"></separator>
          <h5 class="subtitle is-5">Fork this project on GitHub.</h5>
          <div class="columns is-centered is-vcentered">
            <div class="reveal column is-narrow techs">
              <img src="../assets/img/skills/vue.png" alt="Vue">
            </div>
            <div class="reveal column is-narrow">
              <b-icon icon="plus" size="is-large"/>
            </div>
            <div class="reveal column is-narrow techs">
              <img src="../assets/img/skills/vue.png" alt="Bulma">
            </div>
          </div>
          <div class="block reveal">
            <a class="button grow is-dark"
              target="_blank"
              rel="noopener"
              href="https://github.com/samrose3/vue-portfolio">
              <span>Fork</span>
              <b-icon icon="fork" size="is-small" />
            </a>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'fork',
  data() {
    return {};
  },
  mounted() {
    sr.reveal('#fork .reveal', 250);
  },
};
</script>

<style lang="scss" scoped>
  @import '~vars';

  .icon {
    color: $white;
  }
</style>
