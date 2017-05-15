<template>
  <header class="nav">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item"
          href="#"
          v-scroll-to="'#hero'">
          <span class="logo-text">{{ logo }}</span>
        </a>
      </div>
      <span class="nav-toggle"
        :class="{'is-active' : isExpanded }"
        @click="isExpanded = !isExpanded">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu"
        :class="{ 'is-active': isExpanded }">
        <a v-for="item in menuItems"
          class="nav-item"
          href="#"
          @click.prevent="goTo(item)">
          {{ item.title }}
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      logo: 'Sam Rose',
      isExpanded: false,
      menuItems: [
        {
          title: 'About',
          el: '#about',
        }, {
          title: 'Resume',
          url: 'https://samrose3.github.io',
        }, {
          title: 'Projects',
          el: '#projects',
        }, {
          title: 'Skills',
          el: '#skills',
        }, {
          title: 'Contact',
          el: '#contact',
        },
      ],
    };
  },
  methods: {
    goTo(item) {
      this.isExpanded = false;
      if (item.url) {
        window.location.assign(item.url);
      } else {
        this.$scrollTo(item.el);
      }
    },
  },
};
</script>

<style lang="scss">
  .logo-text {
    text-transform: uppercase;
  }
</style>
