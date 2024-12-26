import './hello.scss'

class Hello {
  buttonClass = 'hello'
  render() {
    const button = document.createElement('button')
    const h1  = document.createElement('h1')
    button.innerHTML = 'hello'
    h1.innerHTML = '1111'
    document.body.appendChild(button)
    document.body.appendChild(h1)
    button.classList.add(this.buttonClass)

    button.onclick = () => {
      const p = document.createElement('p')
      p.innerHTML = 'world'
      p.classList.add('world')
      document.body.appendChild(p)
    }
  }
}

export default Hello
