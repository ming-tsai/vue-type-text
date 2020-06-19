<template>
  <component :is="tag">
    <span class="vue-typed">{{ bindingText }}</span>
    <span class="caret" v-if="!isDone"></span>
  </component>
</template>

<script lang="ts" src="./vue-typed.ts"></script>
<style src="./vue-typed.css" scoped></style>
