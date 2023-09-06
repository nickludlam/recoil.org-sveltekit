// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    constructor(el, scrambleCharClass) {
      this.el = el
      this.scrambleCharClass = scrambleCharClass
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
    // this.chars = 'abcdefghijklmnopqrstuvwxyz'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="${this.scrambleCharClass}">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}


// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

export const createTextScramble = (el, textArray, delay = 1800, scrambleCharClass = 'dud') => {
    const defaultTextArray = [
        'The Recoil Collective',
        'Mastodon',
        'Pixelfed',
        'Peertube',
        'Matrix',
        'Postfix',
      ]

    const fx = new TextScramble(el, scrambleCharClass)

    if (delay < 200)
    {
        delay = 200;
    }

    let counter = 0
    const next = () => {
        fx.setText(textArray[counter]).then(() => {
            setTimeout(next, delay)
        })
        counter = (counter + 1) % textArray.length
    }

    next()
};