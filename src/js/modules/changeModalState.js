import { checkNumInputs } from "./utils"

const changeModalState = state => {
  const windowForm = document.querySelectorAll(".balcon_icons_img")
  const windowWidth = document.querySelector("#width")
  const windowHeight = document.querySelector("#height")
  const windowType = document.querySelector("#view_type")
  const windowProfile = document.querySelectorAll(".checkbox")

  // Проверка введенных значений ширины и высоты на числовой ввод
  checkNumInputs("#width")
  checkNumInputs("#height")

  // Функция для привязки действий к элементам интерфейса
  const bindActionToElems = (event, elem, prop) => {
    elem.forEach((item, index) => {
      item.addEventListener(event, () => {
        state[prop] = index
        console.log(state)
      })
    })
  }

  bindActionToElems("click", windowForm, "form")
}

export default changeModalState
