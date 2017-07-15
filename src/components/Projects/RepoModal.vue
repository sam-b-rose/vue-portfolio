<template>
  <div class="card" v-show="contentReady">
    <div class="card-image">
        <figure class="image">
          <img :src="repo.imageSrc"
            :alt="repo.name"
            :srcset="`${repo.imageSrc} 640w`"></img>
        </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
            <figure class="image is-48x48">
              <img v-if="repo.orgImage" :src="repo.orgImage" :alt="repo.org">
              <span v-else class="icon is-large"><i class="fa fa-book"></i></span>
            </figure>
        </div>
        <div class="media-content">
            <p class="title is-4">
              <a :href="repo.url"
                rel="noopener"
                target="_blank">
                {{ repo.name }}
              </a>
            </p>
            <p class="subtitle is-6">
              <a :href="repo.orgLink"
                class="org-link"
                rel="noopener"
                target="_blank">
                {{ repo.org }}
              </a>| <small>{{ formatDate(repo.date) }}</small>
            </p>
        </div>
      </div>

      <div class="content">
        <p class="description" v-html="repo.description.trim()"></p>
        <a v-if="repo.repoUrl"
          :href="repo.repoUrl"
          target="_blank"
          rel="noopener">
          <span class="icon">
            <i class="fa" :class="repo.repoUrl.includes('://gitlab.') ? 'fa-gitlab' : 'fa-github'"></i>
          </span>
        </a>
        <span class="tag"
          v-for="tag in repo.tags"
          :key="tag">
            {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'repoModal',
  data() {
    return {
      placeholder: null,
      contentReady: false,
    };
  },
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      return moment(date).format('MMM YYYY');
    },
    displayContent(showContent = true) {
      this.contentReady = showContent;
    },
  },
  mounted() {
    this.placeholder = new Image();
    this.placeholder.src = this.repo.placeholderSrc;
    this.placeholder.onload = setTimeout(this.displayContent, 100);
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
    max-height: 40px;
    max-width: 40px;

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

  .image {
    img {
      max-height: 100%;
      max-width: 100%;
      height: auto;
      width: auto;
      margin: auto;
    }
  }

  .media {
    .image {
      display: flex;
    }
  }

  .org-link {
    color: $grey;
  }

  .description {
    white-space: pre-line;
  }

  .tag {
    margin-right: 0.2rem;
  }
</style>
