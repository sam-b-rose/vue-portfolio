<template>
  <section id="about" class="section">
    <div class="container has-text-centered">
      <div class="image avatar">
        <img src="../assets/img/samrose.jpg">
      </div>
      <h2 class="title is-2">About</h2>
      <separator></separator>
      <div class="about-text block">
        I am a full-time undergraduate at the
        <a href="https://utk.edu" target="_blank" rel="noopener">University of Tennessee Knoxville</a>
        studying computer engineering. I am currently participating in a team-based design internship program call
        <a href="https://www.ibm.com/design/blog-page.shtml?a-descent-into-the-maelstrom" class="links" target="_blank" rel="noopener">IBM Maelstrom</a>
        in Austin, TX. I am seeking full-time employment following graduation in December 2017.
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
