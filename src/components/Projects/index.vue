<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="block has-text-centered">
        <h2 class="title is-2">Projects</h2>
        <separator></separator>
      </div>
      <div class="columns">
        <div class="column is-8">
          <timeline :projects="projects"></timeline>
        </div>
        <div class="column is-4">
          <repo-panel
            title="Repositories contributed to"
            :repos="career"></repo-panel>
          <repo-panel
            title="Sam's repositories"
            :repos="personal"></repo-panel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Timeline from './Timeline';
import RepoPanel from './RepoPanel';

import projects from './projects';

export default {
  name: 'projects',
  components: {
    Timeline,
    RepoPanel,
  },
  data() {
    return {
      projects,
    };
  },
  computed: {
    career() {
      return projects.filter(p => p.type === 'career');
    },
    personal() {
      return projects.filter(p => p.type === 'personal');
    },
  },
};
</script>
