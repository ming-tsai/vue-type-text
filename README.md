# vue-typed 
![Node.js CI](https://github.com/ming-tsai/vue-typed/workflows/Node.js%20CI/badge.svg?branch=master)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ming-tsai_vue-typed&metric=alert_status)](https://sonarcloud.io/dashboard?id=ming-tsai_vue-typed)

> Typed components for VueJs.

This project contains the main feature that can demonstrate the typing effect, using different HTML tags.
It was inspired when I was creating my own project and need writing animation, but the components that I found, it is creating spans and I need to manage the text as a label, so my word doesn't seem cut in half.

[Live Demo](https://dotnetexplorer.herokuapp.com/)

## Quick start
You need [Vue.js](https://vuejs.org/) **version 2.5+**.

### 1. Install via npm
```bash
npm i @tsaibot/vue-typed
// or
yarn add @tsaibot/vue-typed
```
### 2. Import and use VueTyped
```js
import Vue from 'vue';
import VueTyped from '@tsaibot/vue-typed';

Vue.use(VueTyped);

// this is an example vue settings
Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");

```
Or import on your view
```html
<script lang="ts">
import Vue from 'vue';
import VueTyped from '@/vue-typed.vue';

export default Vue.extend({
  name: 'YourViewName',
  components: {
    VueTyped
  }
});
</script>
```
### 3. Using the component
```html
<!-- your code here -->
<!-- an example using as h1-->
<vue-typed tag="h1" :text="['VueTyped', 'vue-typed', 'vueTyped']"/>
<!-- an example using as span-->
<vue-typed text="Welcome to Your VueTyped" />
<!-- your code here -->
```
### Alternatively
```html
<!-- VueTyped JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/@tsaibot/vue-typed/dist/vue-typed.min.js"></script>

```
## License
Code released under [MIT](https://github.com/ming-tsai/dotnetexplorer/blob/master/LICENSE) license.