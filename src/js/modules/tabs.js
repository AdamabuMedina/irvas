const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  // Получаем элемент заголовка табов, табы и контенты табов
  const header = document.querySelector(headerSelector)
  const tab = document.querySelectorAll(tabSelector)
  const content = document.querySelectorAll(contentSelector)

  // Функция для скрытия всех контентов табов и снятия активного класса с табов
  const hideTabContent = () => {
    content.forEach(item => {
      item.style.display = "none"
    })

    tab.forEach(item => {
      item.classList.remove(activeClass)
    })
  }

  // Функция для отображения контента выбранного таба и установки активного класса для таба
  const showTabContent = (index = 0) => {
    content[index].style.display = "block"
    tab[index].classList.add(activeClass)
  }

  // Скрываем все контенты и отображаем контент первого таба по умолчанию
  hideTabContent()
  showTabContent()

  // Добавляем обработчик клика на заголовок табов для переключения контента
  header.addEventListener("click", e => {
    const target = e.target
    const tabClass = tabSelector.replace(/\./, "")

    // Проверяем, был ли клик на табе или его родителе, и обрабатываем его
    if (
      target &&
      (target.classList.contains(tabClass) ||
        target.parentNode.classList.contains(tabClass))
    ) {
      // Проходим по всем табам и находим индекс кликнутого таба
      tab.forEach((item, index) => {
        if (target === item || target.parentNode === item) {
          // Скрываем все контенты и отображаем контент выбранного таба
          hideTabContent()
          showTabContent(index)
        }
      })
    }
  })
}

export default tabs
