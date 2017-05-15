<template>
  <div id="app">
    <hero></hero>
    <about></about>
    <do></do>
    <projects></projects>
    <skills></skills>
    <contact></contact>
    <copyright></copyright>
  </div>
</template>

<script>
import Hero from './components/Hero';
import About from './components/About';
import Do from './components/Do';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Copyright from './components/Copyright';

export default {
  name: 'app',
  components: {
    Hero,
    About,
    Do,
    Projects,
    Skills,
    Contact,
    Copyright,
  },
};
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/_all";

  $primary: #207885;
  $primary-invert: findColorInvert($primary);
  $twitter: #4099FF;
  $twitter-invert: findColorInvert($twitter);

  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: (
      "white": ($white, $black),
      "black": ($black, $white),
      "light": ($light, $light-invert),
      "dark": ($dark, $dark-invert),
      "primary": ($primary, $primary-invert),
      "info": ($info, $info-invert),
      "success": ($success, $success-invert),
      "warning": ($warning, $warning-invert),
      "danger": ($danger, $danger-invert),
      "twitter": ($twitter, $twitter-invert)
  );

  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";

  @media (min-width: $desktop) {
    .section {
      padding: 6em 4em;

      & > .container {
        max-width: $widescreen;
      }
    }
  }

  .is-outlined {
    background-color:transparent;
    color:#fff;
  }
  .icon-block {
    font-size:5em;
  }
</style>
