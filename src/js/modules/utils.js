const checkNumInputs = selector => {
  // ограничение ввода в поле телефона только цифр
  const numInputs = document.querySelectorAll(selector)
  numInputs.forEach(item => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/, "")
    })
  })
}

export default checkNumInputs
