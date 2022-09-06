let homeCount = document.getElementById("home-count")
let guestCount = document.getElementById("guest-count")
let count = 0
let savedHome = document.getElementById("saved-home")
let savedGuest = document.getElementById("saved-guest")

function homeButton1() {
  count += 1
  homeCount.innerText = count
}

function homeButton2() {
  count += 2
  homeCount.innerText = count
}

function homeButton3() {
  count += 3
  homeCount.innerText = count
}

function guestButton1() {
  count += 1
  guestCount.innerText = count
}

function guestButton2() {
  count += 2
  guestCount.innerText = count
}
function guestButton3() {
  count += 3
  guestCount.innerText = count
}

function saveBtn() {
  let savingHome = homeCount.innerText + "-"
  savedHome.innerText += savingHome
  let savingGuest = guestCount.innerText + "-"
  savedGuest.innerText += savingGuest
  homeCount.innerText = 0
  guestCount.innerText = 0
  count = 0
}

function resetButton() {
  savedGuest.innerText = "Guest: "
  savedHome.innerText = "Home: "
  homeCount.innerText = 0
  guestCount.innerText = 0
  count = 0
}


