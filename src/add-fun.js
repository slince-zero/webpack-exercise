import img from '../img.png'
import img_txt from '../img.txt'

function addImg() {
  const imgElement = document.createElement('img')
  imgElement.src = img
  imgElement.width = 100
  imgElement.height = 100
  imgElement.alt = img_txt
  document.body.appendChild(imgElement)
}

export default addImg