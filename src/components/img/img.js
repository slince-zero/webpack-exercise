import img from '../../../img.png'
import './img.css'

class Img {
  render() {
    const imgElement = document.createElement('img')
    imgElement.classList.add('img')
    imgElement.src = img
    document.body.appendChild(imgElement)
  }
}

export default Img
