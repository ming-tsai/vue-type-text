import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class VueTyper extends Vue {
  @Prop({
    validator: value => value >= 0,
    default: 0
  })
  private repeate!: number;
  @Prop({
    validator: value => value >= 0.0,
    default: 2000
  })
  private timeTakes!: number;

  @Prop({
    required: true,
    validator: value => value && value.length
  })
  private text!: string | string[];

  @Prop({
    validator: value => ["p", "h1", "h2", "h3", "h4", "span"].includes(value),
    default: "span"
  })
  private tag!: string;

  async mounted() {
    await this.writeInit();
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private isDone = false;
  private timer!: any;
  private arrayIndex = 0;
  private bindingText = "";
  async writeInit() {
    if (typeof this.text === "string") {
      await this.writeText(this.text);
      await this.delay(this.timeTakes);
      this.isDone = true;
    } else {
      if(Array.isArray(this.text))
      {
        this.setIntervalImmediately(async () => {
          await this.writeText(this.text[this.arrayIndex]);
          await this.delay(this.timeTakes * 1.5);
          await this.eraseText(this.text[this.arrayIndex]);
          if(this.arrayIndex >= this.text.length - 1) {
            this.arrayIndex = 0;
          }else {
            this.arrayIndex++;
          }
          return;
        }, this.timeTakes * 1.4 * 2);
      }
    }
  }

  setIntervalImmediately(func: any, interval: number) {
    func();
    return setInterval(func, interval);
  }

  async writeText(text: string) {
    let index = 0;
    this.bindingText = "";
    const period = this.timeTakes / text.length;
    const timer = setInterval(() => {
      if (index >= text.length - 1) {
        clearInterval(timer);
      } 
      
      index = this.appendText(text[index], index);
    }, period);
  }

  appendText(char: string, index: number) {
    this.bindingText += char;
    index++;
    return index;
  }

  eraseInit() {
    if (typeof this.text === "string") {
      this.eraseText(this.text);
    }
  }

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
  }

  removeText(index: number) {
    this.bindingText = this.bindingText.substring(0, index);
    index--;
    return index;
  }
}
