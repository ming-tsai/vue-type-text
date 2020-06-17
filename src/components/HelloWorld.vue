<template>
  <div class="hello">
    <s-typer :text="['vue-typer', 'VueTyper']" :tag="'h1'" />
    <s-typer :text="msg" :tag="'h2'" :timesTake="2000" />
    <s-typer :text="msg" :tag="'h3'" :timesTake="2000" />
    <s-typer :text="msg" :tag="'h3'" :timesTake="2000" />
    <s-typer :text="msg" :timesTake="2000" />
    <s-typer :text="msg" :tag="'p'" :timesTake="2000" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VueTyper from "@/components/VueTyper/VueTyper.vue";

@Component({
  components: {
    "s-typer": VueTyper
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
