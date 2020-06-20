<template>
  <component :is="tag">
    <span class="vue-type-text">{{ bindingText }}</span>
    <span class="caret" v-if="!isDone"></span>
  </component>
</template>

<script lang="ts" src="./vue-type-text.ts"></script>
<style src="./vue-type-text.css" scoped></style>
