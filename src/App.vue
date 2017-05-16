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
