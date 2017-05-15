<template>
  <div id="contact" class="container has-text-centered">
    <div class="block reveal">
      <a class="button is-dark"
        :href="`mailto:${email}`">
          Ping me
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      email: 'hello@samrose.me',
    };
  },
  mounted() {
    sr.reveal('#contact .block', 100);
  },
};
</script>

<style lang="scss">
  #contact {
    padding: 5rem;
  }
</style>

