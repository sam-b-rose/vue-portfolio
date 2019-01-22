<template>
  <section id="about" class="section">
    <div class="container has-text-centered">
      <div class="image avatar">
        <img src="../assets/img/samrose.jpg">
      </div>
      <h2 class="title is-2">About</h2>
      <separator></separator>
      <div class="about-text block">
        <p>I’m a passionate User Experience designer creating experiences for mobile, web, and software products. I'm dedicated to promoting the discipline of user experience design.</p>
        <br>
        <p>I am currently located in Austin, TX leading UX and prototyping initiatives on
        <a href="https://www.ibm.com/products/cloud-private-for-data" target="_blank" rel="noopener">
        IBM Cloud Private for Data
        </a> to better design an on-premise data platform for enterprise.</p>
      </div>
      <div class="block">
        <a class="button is-dark"
          href="https://samrose3.github.io"
          target="_blank"
          rel="noopener">
          <span>Resume</span>
          <b-icon icon="file-text-o" size="is-small" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {};
  },
  mounted() {
    sr.reveal('#about .block', 200);
  },
};
</script>

<style lang="scss">
  @import '~vars';

  .avatar {
    height: 200px;
    width: 200px;
    margin: 1rem auto;

    img {
      border-radius: 200px;
      border: 3px solid $secondary;
    }
  }

  .about-text {
    max-width: $tablet;
    margin: auto;
  }
</style>
