// declaration of variables we'll work with in the loops
const apiKey = `20862006752d4ed99d821ff4b2a41c0c`
const gamesUrl = `https://api.rawg.io/api/games`
const buttonsContainer = document.body.querySelector(`.buttons`)
const gamesContainer = document.body.querySelector(`.games`)
const darkModeContainer = document.body.querySelector('.dark-mode-toggle')
const pageStyle = document.body.style
let years = [2000]

// For Loop that builds our array of years 
for (let i = 0; years.length < 22; i++) {
  years.push(years[i]+1)
}

// ForEach Loop
years.forEach((year) => {
  
// creates button, sets innerText of button, adds button to page
const btn = document.createElement('button')
btn.classList.add('year-button')
btn.innerText = `${year}`
buttonsContainer.appendChild(btn)

const getGames = async () => {
  // fetches data from RAWG API
  const getData = await axios.get(gamesUrl, {
    params: {
      dates: `${year}-01-01,${year}-12-31`,
      ordering: `-rating`,
      key: apiKey
    }
  })
  // creates <p> element, adds content from API, and adds to page
  for (let i = 0; i < 5; i++) {
    let game = document.createElement('p')
    game.innerText = `${i+1}: ${getData.data.results[i].name}`
    gamesContainer.appendChild(game)
  }
}

// adds click listener to button that (1) clears parent node (2) runs the getGames method
btn.addEventListener('click', ()=>{
  gamesContainer.innerHTML = ``
  gamesContainer.style.padding = `5px`
  getGames()
})

}) // end of ForEach loop


// creates Night Mode button
const darkModeBtn = document.createElement('button')
darkModeBtn.innerText = `🌚 Toggle Dark Mode`
darkModeBtn.classList.add('light-dark-button')
darkModeContainer.appendChild(darkModeBtn)

// creates Light Mode button
const lightModeBtn = document.createElement('button')
lightModeBtn.innerText = `🌞 Toggle Light Mode`
lightModeBtn.classList.add('light-dark-button')

// adds click listener to dark mode button 
darkModeBtn.addEventListener('click', () => {
  pageStyle.backgroundImage = "url('nightgoat2.jpeg')"
  pageStyle.backgroundColor = "rgb(11,30,50)"
  pageStyle.color = 'white'
  gamesContainer.style.backgroundColor = "rgb(11,30,50)"
  // button switch
  document.body.querySelector('.dark-mode-toggle').innerHTML = ``
  darkModeContainer.appendChild(lightModeBtn)
})

// adds click listener to light mode button 
lightModeBtn.addEventListener('click', () => {
  pageStyle.backgroundImage = "url(unsplash-goat.jpg)"
  pageStyle.backgroundColor = "rgb(209, 209, 219)"
  pageStyle.color = 'black'
  gamesContainer.style.backgroundColor = "rgb(209, 209, 219)"
  lightModeBtn.innerText = `🌚 Toggle Dark Mode`
  // button switch
  document.body.querySelector('.dark-mode-toggle').innerHTML = ``
  darkModeContainer.appendChild(darkModeBtn)
})