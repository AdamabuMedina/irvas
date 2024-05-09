const forms = () => {
  const form = document.querySelectorAll("form")
  const inputs = document.querySelectorAll("input")
  const phoneInputs = document.querySelectorAll("input[name='user_phone']")

  // ограничение ввода в поле телефона только цифр
  phoneInputs.forEach(item => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/, "")
    })
  })

  // Объект с сообщениями для вывода пользователю
  const message = {
    loading: "Загрузка",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
  }

  // Функция для отправки данных формы на сервер
  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading
    let res = await fetch(url, {
      method: "POST",
      body: data,
    })

    return await res.text()
  }

  // Функция для очистки значений всех инпутов после отправки формы
  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = ""
    })
  }

  // Обработчик события submit для каждой формы
  form.forEach(item => {
    item.addEventListener("submit", event => {
      event.preventDefault()

      let statusMessage = document.createElement("div")
      statusMessage.classList.add("status")
      item.appendChild(statusMessage)

      const formData = new FormData(item)

      postData("assets/server.php", formData)
        .then(res => {
          console.log(res)
          statusMessage.textContent = message.success
        })
        .catch(() => (statusMessage.textContent = message.failure))
        .finally(() => {
          clearInputs()
          setTimeout(() => {
            statusMessage.remove()
          }, 5000)
        })
    })
  })
}

export default forms