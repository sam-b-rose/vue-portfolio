<template>
  <section id="about" class="section">
    <div class="container has-text-centered">
      <div class="image avatar">
        <img src="../assets/img/samrose.jpg">
      </div>
      <h2 class="title is-2">About</h2>
      <separator></separator>
      <div class="about-text block">
        I am a full-time undergraduate at The University of Tennessee Knoxville studying Computer Engineering. I have worked with scripting languages such as JavaScript, database fundamentals, and other creative mediums such as photography, videography, and graphic design. I am interested in entrepreneurship, JavaScript, Swift, and UI / UX design.
      </div>
      <div class="block">
        <a class="button grow is-dark"
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
