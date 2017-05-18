<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          © 2017 Sam Rose, made with ❤️ and ☕️
        </p>
        <p>
          <a class="icon"
            v-for="item in social"
            :href="item.link"
            target="_blank"
            rel="noopener">
            <b-icon :icon="item.icon"></b-icon>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'copyright',
  data() {
    return {
      social: [
        {
          icon: 'linkedin',
          link: 'https://linkedin.com/in/samrose3',
        },
        {
          icon: 'twitter',
          link: 'https://twitter.com/_samrose3_',
        },
        {
          icon: 'github',
          link: 'https://github.com/samrose3',
        },
        {
          icon: 'gitlab',
          link: 'https://gitlab.com/samrose3',
        },
        {
          icon: 'codepen',
          link: 'https://codepen.io/samrose3',
        },
      ],
    };
  },
};
</script>

