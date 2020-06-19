<script lang="ts">
import Vue from 'vue';
import VueTyped from '@/vue-typed.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueTyped
  }
});
</script>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <vue-typed tag="h1" :text="['VueTyped', 'vue-typed', 'vueTyped']"/>
    <vue-typed tag="p" text="Welcome to Your VueTyped" />
  </div>
</template>

<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
