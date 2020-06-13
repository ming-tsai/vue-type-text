<template>
  <component :is="'div'">
    <span class="s-typer">{{ bindingText }}</span>
    <span class="caret"></span>
  </component>
</template>

<script lang="ts" src="./VueTyper.ts" />
<style src="./VueTyper.css" scoped />
