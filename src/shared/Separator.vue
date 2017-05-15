<template>
  <div class="separator-container"
    :style="`--separator-color: ${color}`">
    <div class="separator">⌘</div>
  </div>
</template>

<script>
export default {
  name: 'separator',
  props: {
    color: {
      default: '#c5a47e',
      type: String,
    },
  },
};
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/variables.sass";

  :root {
    --separator-color: #c5a47e;
  }

  .separator-container {
    text-align: center;
    position: relative;
  }

  .separator {
    color: var(--separator-color);
    margin: 0 auto 1em;
    width: 11em;

    &:before,
    &:after {
      display: block;
      width: 40%;
      content: " ";
      margin-top: 14px;
      border: 1px solid var(--separator-color);
    }

    &:before {
      float: left;
    }

    &:after {
      float: right;
    }
  }
</style>


