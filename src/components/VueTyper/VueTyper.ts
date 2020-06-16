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
    await this.delay(this.timeTakes * 2);
    this.eraseInit();
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private isDone = false;
  private index = 0;
  private bindingText = "";
  async writeInit() {
    if (typeof this.text === "string") {
      this.index = 0;
      this.bindingText = "";
      await this.writeText(this.text);
    }
  }

  async writeText(text: string) {
    const period = this.timeTakes / text.length;
    const timer = setInterval(() => {
      if (this.index >= text.length - 1) {
        clearInterval(timer);
        this.isDone = true;
      } else {
        this.isDone = false;
      }
      this.appendText(text[this.index]);
    }, period);
  }

  appendText(char: string) {
    this.bindingText += char;
    this.index++;
  }

  eraseInit() {
    if (typeof this.text === "string") {
      this.index = this.text.length;
      this.bindingText = this.text;
      this.eraseText(this.text);
    }
  }

  async eraseText(text: string) {
    const period = this.timeTakes / text.length;
    const timer = setInterval(() => {
      if (this.index <= 0) {
        clearInterval(timer);
        this.isDone = true;
      } else {
        this.isDone = false;
      }
      this.removeText(this.index);
    }, period);
  }

  removeText(index: number) {
    this.bindingText = this.bindingText.substring(0, index);
    this.index--;
  }
}
