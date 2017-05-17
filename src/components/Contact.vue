<template>
  <section id="contact" class="section">
    <div class="container has-text-centered">
      <div class="block reveal">
        <a class="button grow is-dark"
          :href="`mailto:${email}`">
            <span>Ping me</span>
            <b-icon icon="terminal" size="is-small" />
        </a>
      </div>
    </div>
  </section>
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
