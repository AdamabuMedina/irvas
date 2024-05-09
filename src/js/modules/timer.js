const timer = (id, deadline) => {
  // Функция для добавления ведущего нуля к числам меньше 10
  const addZero = num => {
    if (num <= 9) {
      return "0" + num
    } else {
      return num
    }
  }

  // Функция для вычисления оставшегося времени до дедлайна
  const getTimeRemaining = endtime => {
    const total = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((total / 1000) % 60),
      minutes = Math.floor((total / 1000 / 60) % 60),
      hours = Math.floor((total / (1000 * 60 * 60)) % 24),
      days = Math.floor(total / (1000 * 60 * 60 * 24))

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    }
  }

  // Функция для установки таймера на странице
  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000)

    updateClock()

    // Функция для обновления значений таймера
    function updateClock() {
      const t = getTimeRemaining(endtime)

      days.textContent = addZero(t.days)
      hours.textContent = addZero(t.hours)
      minutes.textContent = addZero(t.minutes)
      seconds.textContent = addZero(t.seconds)

      // Остановка таймера, если время истекло
      if (t.total <= 0) {
        days.textContent = "00"
        hours.textContent = "00"
        minutes.textContent = "00"
        seconds.textContent = "00"

        clearInterval(timeInterval)
      }
    }
  }

  setClock(id, deadline)
}

export default timer
