<template>
  <nav class="panel">
    <p class="panel-heading">
      {{ title }}
      <span class="repo-count">{{ repos.length }}</span>
    </p>
    <a class="panel-block"
      v-for="repo in repos"
      :class="{ 'is-active': false }"
      :href="repo.url"
      target="_blank"
      rel="noopener">
      <span class="panel-icon">
        <i class="fa" :class="repo.type === 'career' ? 'fa-code-fork' : 'fa-book'"></i>
      </span>
      {{ repo.name }}
    </a>
  </nav>
</template>

<script>
export default {
  name: 'repoPanel',
  props: {
    title: {
      required: true,
      type: String,
    },
    repos: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
  .panel {
    border-radius: 5px;
    border: 1px solid #d3d6db;
  }

  .panel-heading {
    font-size: 1em;
    border: none;
    border-bottom: 1px solid #d3d6db;
    border-radius: 4px 4px 0 0;
  }

  .panel-block {
    border: none;

    &:not(:last-child) {
      border-bottom: 1px solid #d3d6db;
    }
  }

  .repo-count {
    display: inline-block;
    padding: 2px 5px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    color: #fff;
    background-color: rgba(47,54,61,0.5);
    border-radius: 20px;
  }
</style>
