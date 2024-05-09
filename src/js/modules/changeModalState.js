const changeModalState = state => {
  const windowForm = document.querySelectorAll(".balcon_icons_img")
  const windowWidth = document.querySelector("#width")
  const windowHeight = document.querySelector("#height")
  const windowType = document.querySelector("#view_type")
  const windowProfile = document.querySelectorAll(".checkbox")

  windowForm.forEach((item, index) => {
    item.addEventListener("click", () => {
      state.form = index
      console.log(state)
    })
  })
}

export default changeModalState
