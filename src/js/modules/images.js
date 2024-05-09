// Функция для работы с изображениями
const images = () => {
  const imgPopup = document.createElement("div"),
    bigImage = document.createElement("img"),
    workSection = document.querySelector(".works")

  imgPopup.classList.add("popup")
  workSection.appendChild(imgPopup)

  // Настройка стилей всплывающего окна
  imgPopup.style.justifyContent = "center"
  imgPopup.style.alignItems = "center"
  imgPopup.style.display = "none"

  // Добавляем изображение внутрь всплывающего окна
  imgPopup.appendChild(bigImage)

  // Обработчик события клика на разделе работ
  workSection.addEventListener("click", e => {
    e.preventDefault()

    let target = e.target

    if (target && target.classList.contains("preview")) {
      imgPopup.style.display = "flex"
      const path = target.parentNode.getAttribute("href")
      bigImage.setAttribute("src", path)
    }

    if (target && target.matches("div.popup")) {
      imgPopup.style.display = "none"
    }
  })
}

export default images
