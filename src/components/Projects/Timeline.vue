<template>
  <div class="event-timeline">
    <b-dropdown v-model="filterBy">
      <button class="button" slot="trigger">
          <span>{{ filterBy }}</span>
          <b-icon icon="caret-down" size="is-small"></b-icon>
      </button>

      <b-dropdown-option value="All" icon="star">All</b-dropdown-option>
      <b-dropdown-option value="Career" icon="code-fork">Career</b-dropdown-option>
      <b-dropdown-option value="Personal" icon="book">Personal</b-dropdown-option>
    </b-dropdown>
    <hr>
    <p class="event-item" v-for="project in filter(projects)">
      <span class="icon-item-type">
        <i class="fa" :class="project.type === 'personal' ? 'fa-book' : 'fa-code-fork'"></i>
      </span>
      <a :href="project.orgLink" target="_blank" rel="noopener">{{ project.org }}</a>
      {{ project.type === 'personal' ? 'created' : 'starred' }}
      <a :href="project.url" target="_blank" rel="noopener">{{ project.name }}</a>
      <small>1 hours ago</small>
    </p>
  </div>
</template>

<script>
export default {
  name: 'timeline',
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filterBy: 'All',
    };
  },
  methods: {
    filter(events) {
      switch (this.filterBy) {
        case 'Career':
          return events.slice().filter(e => (e.type === 'career'));
        case 'Personal':
          return events.slice().filter(e => (e.type === 'personal'));
        default:
          return events.slice().sort((a, b) => (a.date > b.date ? -1 : 1));
      }
    },
  },
};
</script>

<style lang="scss">
  .event-item {
    padding: 10px 10px 10px 0;
    border-bottom: 1px solid #f1f1f1;
  }

  .icon-item-type i {
    font-size: 12px;
    padding: 6px 15px 6px 6px;
    color: #bbbbbb;
  }
</style>
