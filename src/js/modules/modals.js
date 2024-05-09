// import { showModalByTime } from "./utils"

const modals = () => {
  // Функция для закрытия модального окна и возвращения прокрутки фона
  const closeModal = (modal, windows) => {
    windows.forEach(item => {
      item.style.display = "none"
    })
    modal.style.display = "none"
    document.body.style.overflow = ""
  }

  // Функция для привязки событий открытия/закрытия модального окна к триггерам
  const bindModalEvents = (
    triggerSeletor,
    modalSeletor,
    closeSeletor,
    closeClickOverlay = true
  ) => {
    const triggers = document.querySelectorAll(triggerSeletor)
    const modal = document.querySelector(modalSeletor)
    const close = document.querySelector(closeSeletor)
    const windows = document.querySelectorAll("[data-modal]")

    // Проходимся по каждому триггеру и добавляем обработчик клика
    triggers.forEach(item => {
      item.addEventListener("click", e => {
        e.preventDefault()

        windows.forEach(item => {
          item.style.display = "none"
        })

        modal.style.display = "block"
        document.body.style.overflow = "hidden"
      })
    })

    // Добавляем обработчик клика на кнопку закрытия
    close.addEventListener("click", () => closeModal(modal, windows))

    // Добавляем обработчик клика на фон модального окна для закрытия
    modal.addEventListener("click", event => {
      if (event.target === modal && closeClickOverlay) {
        closeModal(modal, windows)
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
  bindModalEvents(".popup_calc_btn", ".popup_calc", ".popup_calc_close")
  bindModalEvents(".popup_calc_btn", ".popup_calc", ".popup_calc_close")
  bindModalEvents(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  )
  bindModalEvents(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  )

  // Показываем модальное окно после определенного времени
  // showModalByTime(".popup", 60000)
}

export default modals
