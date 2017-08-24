<template>
  <div class="project-details"
    :class="{ active: showDetails }"
    :style="{ 'margin-left': `-${projectListWidth}` }">

    <transition name="fade">
      <div v-if="showDetails" class="details">
        <div class="modal-close" @click="hideDetails"></div>
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                  <figure class="image is-48x48">
                    <img v-if="activeProject.orgImage" :src="activeProject.orgImage" :alt="activeProject.org">
                    <span v-else class="icon is-large"><i class="fa fa-book"></i></span>
                  </figure>
              </div>
              <div class="media-content">
                  <p class="title is-4">
                    <a :href="activeProject.url"
                      rel="noopener"
                      target="_blank">
                      {{ activeProject.name }}
                    </a>
                  </p>
                  <p class="subtitle is-6">
                    <a :href="activeProject.orgLink"
                      class="org-link"
                      rel="noopener"
                      target="_blank">
                      {{ activeProject.org }}
                    </a>| <small>{{ moment(activeProject.date).format('MMM YYYY') }}</small>
                  </p>
              </div>
            </div>

            <div class="content">
              <p class="description" v-html="activeProject.description.trim()"></p>
              <a v-if="activeProject.repoUrl"
                :href="activeProject.repoUrl"
                target="_blank"
                rel="noopener">
                <span class="icon">
                  <i class="fa" :class="activeProject.repoUrl.includes('://gitlab.') ? 'fa-gitlab' : 'fa-github'"></i>
                </span>
              </a>
              <span class="tag"
                v-for="tag in activeProject.tags"
                :key="tag">
                  {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="kern">
      <div v-if="activeProject" class="project-image"
        :key="activeProject.projectImage"
        :style="{ 'background-image': `url(${activeProject.projectImage})` }">
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'project-details',
  computed: {
    ...mapState([
      'activeProject',
      'showDetails',
    ]),
    projectListWidth() {
      const el = document.querySelector('.js-project-list');
      if (el == null) return 0;

      const style = el.currentStyle || window.getComputedStyle(el);
      const width = el.offsetWidth;
      const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);

      return this.showDetails ? `${width + margin}px` : 0;
    },
  },
  methods: {
    hideDetails() {
      this.$store.commit('setShowDetails', false);
    },
  },
};
</script>

<style lang="scss">
@import '~vars';

.project-details {
  position: relative;
  height: 100%;
  width: 100%;
  margin-left: 0;
  transition: all 0.2s ease;
  overflow: hidden;

  &.active {
    width: 100vw;

    .project-image {
      transform: scale(1.2);
      filter: blur(8px);
    }
  }

  .modal-close {
    position: absolute;
  }

  .details {
    background: rgba($white, 0.85);
    position: absolute;
    height: 100%;
    width: 100vw;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .card {
    &.content {
      color: $white;
    }
    .description {
      text-align: justify;
    }
  }

  .project-image {
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: scale(1);
    width: 100%;
    height: 100%;
    transition: all 0.2s ease;
  }

  .kern-enter-active, .kern-leave-active,
  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s ease;
  }

  .kern-enter, .kern-leave-to {
    transform: scale(1.2);
    opacity: 0;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>
