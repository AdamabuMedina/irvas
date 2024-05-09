export const checkNumInputs = selector => {
  // ограничение ввода в поле телефона только цифр
  const numInputs = document.querySelectorAll(selector)
  numInputs.forEach(item => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/, "")
    })
  })
}

// Функция для отображения модального окна через определенное время
export const showModalByTime = (selector, time) => {
  setTimeout(() => {
    const modal = document.querySelector(selector)
    if (modal) {
      modal.style.display = "block"
      document.body.style.overflow = "hidden"
    }
  }, time)
}

// Функция для вычисления ширины скроллбара
export const calcScroll = () => {
  let div = document.createElement("div")

  div.style.width = "50px"
  div.style.height = "50px"
  div.style.overflowY = "scroll"
  div.style.visibility = "hidden"

  document.body.appendChild(div)
  let scrollWidth = div.offsetWidth - div.clientWidth
  div.remove()

  return scrollWidth
}
