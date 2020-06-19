<script lang="ts">
import Vue from 'vue';

interface VueType {
  isDone: boolean;
  arrayIndex: number;
  bindingText: string;
}

export default Vue.extend({
  name: 'VueTyped', // vue component name
  props: {
    timeTakes: {
      type: Number,
      validator: value => value >= 0.0,
      default: 2000
    },
    text: {
      type: [String, Array],
      required: true,
      validator: value => {
        var result = value != undefined && value != null && value.length > 0;
        if (result && Array.isArray(value)) {
          value.forEach((v) => {
            if(typeof v != 'string')
            {
              result = false;
            }
          });
        }
        return result;
      }
    },
    tag: {
      type: String,
      default: 'span',
      validator: value => ['p', 'h1', 'h2', 'h3', 'h4', 'span'].includes(value)
    }
  },
  data(): VueType {
    return {
      isDone: false,
      arrayIndex: 0,
      bindingText: ''
    };
  },
  methods: {
    async writeInit() {
      if (typeof this.text === "string") {
        await this.writeText(this.text);
        await this.delay(this.timeTakes);
        this.isDone = true;
      } else {
        if (Array.isArray(this.text)) {
          this.setIntervalImmediately(
            async () => await this.managerArray(),
            this.timeTakes * 1.4 * 2
          );
        }
      }
    },
    async writeText(text: string) {
      let index = 0;
      this.bindingText = '';
      const period = this.timeTakes / text.length;
      const timer = setInterval(() => {
        if (index >= text.length - 1) {
          clearInterval(timer);
        }
        index = this.appendText(text[index], index);
      }, period);
    },
    appendText(char: string, index: number) {
      this.bindingText += char;
      index++;
      return index;
    },
    async eraseText(text: string) {
      let index = text.length;
      this.bindingText = text;
      const period = this.timeTakes / text.length;
      const timer = setInterval(() => {
        if (index <= 0) {
          clearInterval(timer);
        }
        index = this.removeText(index);
      }, period);
    },
    removeText(index: number) {
      this.bindingText = this.bindingText.substring(0, index);
      index--;
      return index;
    },
    async managerArray() {
      const text = this.text as string[];
      await this.writeText(text[this.arrayIndex]);
      await this.delay(this.timeTakes * 1.5);
      await this.eraseText(text[this.arrayIndex]);
      if (this.arrayIndex >= this.text.length - 1) {
        this.arrayIndex = 0;
      } else {
        this.arrayIndex++;
      }
      return;
    },
    delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    setIntervalImmediately(func: () => void, interval: number) {
      func();
      return setInterval(func, interval);
    }
  },
  async mounted() {
    await this.writeInit();
  },
});
</script>

<template>
  <component :is="tag">
    <span class="vue-typed">{{ bindingText }}</span>
    <span class="caret" v-if="!isDone"></span>
  </component>
</template>

<style scoped>
.caret {
  display: inline-block;
  vertical-align: baseline;
  width: 1px;
  background: black;
  margin-left: 3px;
  position: relative;
  top: 2px;
  -webkit-animation: caret-animation 0.5s linear infinite;
  animation: caret-animation 0.5s linear infinite;
}

.caret:empty:before {
  content: "\200b"; /* unicode zero width space character */
}

@keyframes caret-animation {
  0% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
