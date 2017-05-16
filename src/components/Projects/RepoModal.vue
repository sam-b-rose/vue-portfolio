<template>
  <div class="card">
    <div class="card-image">
        <figure class="image">
          <img :src="repo.imageSrc || 'http://placehold.it/1280x960'" :alt="repo.name">
        </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
            <figure class="image is-48x48">
              <img src="http://placehold.it/48x48" alt="Image">
            </figure>
        </div>
        <div class="media-content">
            <p class="title is-4">{{ repo.name }}</p>
            <p class="subtitle is-6">{{ repo.org }}</p>
        </div>
      </div>

      <div class="content">
        [Repo description]
        <br>
        <small>{{ repo.date.toDateString() }}</small>
        <br>
        <span v-for="tag in repo.tags" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'repoModal',
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  @import '~vars';

  .modal-background {
    background-color: $white;
  }

  .modal-close {
    transition: background-color 0.25s ease;

    &:before,
    &:after {
      background-color: $grey;
    }

    &:hover,
    &:focus {
      background-color: rgba(10, 10, 10, 0.15);
    }
  }

  .card {
    background-color: transparent;
  }

  .image img {
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
    margin: auto;
  }

  .tag {
    margin-right: 0.2rem;
  }
</style>
