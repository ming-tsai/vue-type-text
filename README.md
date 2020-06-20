# vue-type-text 
![Node.js CI](https://github.com/ming-tsai/vue-type-text/workflows/Node.js%20CI/badge.svg?branch=master)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ming-tsai_vue-type-text&metric=alert_status)](https://sonarcloud.io/dashboard?id=ming-tsai_vue-type-text)

> Typed components for VueJs.

This project contains the main feature that can demonstrate the typing effect, using different HTML tags.
It was inspired when I was creating my own project and need writing animation, but the components that I found, it is creating spans and I need to manage the text as a label, so my word doesn't seem cut in half.

[Live Demo](https://dotnetexplorer.herokuapp.com/)

## Quick start
You need [Vue.js](https://vuejs.org/) **version 2.5+**.

### 1. Install via npm
```bash
npm i vue-type-text
// or
yarn add vue-type-text
```
### 2. Import and use VueTypeText
```js
import Vue from 'vue';
import VueTypeText from 'vue-type-text';

Vue.use(VueTypeText);

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
import VueTypeText from '@/vue-type-text.vue';

export default Vue.extend({
  name: 'YourViewName',
  components: {
    VueTypeText
  }
});
</script>
```
### 3. Using the component
```html
<!-- your code here -->
<!-- an example using as h1-->
<vue-type-text tag="h1" :text="['VueTypeText', 'vue-type-text', 'vueTyped']"/>
<!-- an example using as span-->
<vue-type-text text="Welcome to Your VueTypeText" />
<!-- your code here -->
```
### Alternatively
```html
<!-- VueTypeText JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/vue-type-text/dist/vue-type-text.min.js"></script>
```
## License
Code released under [MIT](https://github.com/ming-tsai/vue-type-text/blob/master/LICENSE) license.