const modals = () => {
  // Функция для закрытия модального окна и возвращения прокрутки фона
  const closeModal = modal => {
    modal.style.display = "none"
    document.body.style.overflow = ""
  }

  // Функция для отображения модального окна через определенное время
  const showModalByTime = (selector, time) => {
    setTimeout(() => {
      const modal = document.querySelector(selector)
      if (modal) {
        modal.style.display = "block"
        document.body.style.overflow = "hidden"
      }
    }, time)
  }

  // Функция для привязки событий открытия/закрытия модального окна к триггерам
  const bindModalEvents = (triggerSeletor, modalSeletor, closeSeletor) => {
    const triggers = document.querySelectorAll(triggerSeletor)
    const modal = document.querySelector(modalSeletor)
    const close = document.querySelector(closeSeletor)

    // Проходимся по каждому триггеру и добавляем обработчик клика
    triggers.forEach(item => {
      item.addEventListener("click", e => {
        e.preventDefault()

        modal.style.display = "block"
        document.body.style.overflow = "hidden"
      })
    })

    // Добавляем обработчик клика на кнопку закрытия
    close.addEventListener("click", () => closeModal(modal))

    // Добавляем обработчик клика на фон модального окна для закрытия
    modal.addEventListener("click", event => {
      if (event.target === modal) {
        closeModal(modal)
      }
    })
  }

  // Привязываем события к триггерам для открытия модальных окон
  bindModalEvents(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  )
  bindModalEvents(".phone_link", ".popup", ".popup .popup_close")

  // Показываем модальное окно после определенного времени
  showModalByTime(".popup", 60000)
}

export default modals
