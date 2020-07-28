"use strict"
let mode = localStorage.getItem("mode") || "light"

// mode  <- 'dark' || 'light -> 'dark
// mode <- 'light' || 'light' -> 'light'
// mode <- null || 'light' -> 'light'

const modeBtn = document.getElementById("mode-btn") // null

if (mode === "dark") {
  document.body.classList.add("bg-dark", "text-light")
}

if (modeBtn) {
  modeBtn.addEventListener("click", () => {
    if (document.body.classList.contains("bg-dark")) {
      // enlever bg-dark et text-light
      // mettre en place mode light
      document.body.classList.remove("bg-dark", "text-light")
      mode = "light"
    } else {
      document.body.classList.add("bg-dark", "text-light")
      mode = "dark"
    }
    localStorage.setItem("mode", mode)
  })
}
