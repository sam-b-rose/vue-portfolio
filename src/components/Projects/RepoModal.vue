<template>
  <div class="card">
    <div class="card-image">
        <figure class="image is-4by3">
          <img src="http://placehold.it/1280x960" alt="Image">
        </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
            <figure class="image is-48x48">
            <img src="http://placehold.it/1280x960" alt="Image">
            </figure>
        </div>
        <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
        </div>
      </div>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a>#css</a> <a>#responsive</a>
        <br>
        <small>11:09 PM - 1 Jan 2016</small>
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
    background-color: rgba(255, 255, 255, 0.95);
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
</style>
