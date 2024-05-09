import { checkNumInputs } from "./utils"

const changeModalState = state => {
  const windowForm = document.querySelectorAll(".balcon_icons_img")
  const windowWidth = document.querySelectorAll("#width")
  const windowHeight = document.querySelectorAll("#height")
  const windowType = document.querySelectorAll("#view_type")
  const windowProfile = document.querySelectorAll(".checkbox")

  // Проверка введенных значений ширины и высоты на числовой ввод
  checkNumInputs("#width")
  checkNumInputs("#height")

  // Функция для привязки действий к элементам интерфейса
  const bindActionToElems = (event, elem, prop) => {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[prop] = i
            break
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              i === 0 ? (state[prop] = "Холодное") : (state[prop] = "Теплое")
              elem.forEach((box, j) => {
                box.checked = false
                if (i === j) box.checked = true
              })
            } else {
              state[prop] = item.value
            }
            break
          case "SELECT":
            state[prop] = item.value
            break
        }
        console.log(state)
      })
    })
  }

  bindActionToElems("click", windowForm, "form")
  bindActionToElems("input", windowHeight, "height")
  bindActionToElems("input", windowWidth, "widht")
  bindActionToElems("change", windowType, "type")
  bindActionToElems("change", windowProfile, "profile")
}

export default changeModalState
