<template>
  <component :is="tag">
    <span class="s-typer">{{ bindingText }}</span>
    <span class="caret" v-if="!isDone"></span>
  </component>
</template>

<script lang="ts" src="./VueTyper.ts" />
<style src="./VueTyper.css" scoped />
