import * as Color from "./color"
import * as Bg from "./bg"

class ProLog {
  readonly text: string

  constructor(text: string) {
    this.text = text
  }

  colorRed() {
    return new ProLog(Color.red(this.text))
  }

  colorYellow() {
    return new ProLog(Color.yellow(this.text))
  }

  colorBrightYellow() {
    return new ProLog(Color.brightYellow(this.text))
  }

  bgBlack() {
    return new ProLog(Bg.black(this.text))
  }

  toString() {
    return this.text
  }
}

console.log(new ProLog("hello").colorRed().bgBlack().toString())

export default ProLog
