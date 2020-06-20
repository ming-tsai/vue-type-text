<script lang="ts">
import Vue from 'vue';
import VueTypeText from '@/vue-type-text.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueTypeText
  },
  data() {
    return {
      bindingText: "Welcome to VueTypeText",
    };
  }
});
</script>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <vue-type-text tag="h1" :text="['VueTypeText', 'vue-type-text', 'vue type text']"/>
    <vue-type-text tag="p" :text="bindingText" />
    <button @click="bindingText = 'Welcome to Your typed demo'">Change text</button>
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
