<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from '@/View/HomePage';

export default {
  name: 'App',
  components: {
    HomePage
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  height: 100%;

  color: #001a34;
  font-family: 'Raleway', sans-serif;
}
</style>
