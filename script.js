const apiKey = `20862006752d4ed99d821ff4b2a41c0c`
const gamesUrl = `https://api.rawg.io/api/games`
const buttonsContainer = document.body.querySelector(`.buttons`)
const gamesContainer = document.body.querySelector(`.games`)

////////////// 2019 btn

const twenty19btn = document.createElement('button')
twenty19btn.innerText = '2019'
buttonsContainer.appendChild(twenty19btn)

const twenty19 = async () => {
  const getData = await axios.get(gamesUrl, {
    params: {
      dates: `2019-01-01,2019-12-31`,
      ordering: `-rating`,
      key: apiKey
    }
  })
  for (let i = 0; i < 5; i++) {
    const game = document.createElement('p')
    game.innerText = `${getData.data.results[i].name}`
    gamesContainer.appendChild(game)
  }
}

twenty19btn.addEventListener('click', ()=>{
  gamesContainer.innerHTML = ``
  twenty19()
})

////////////// 2020 btn

const twenty20btn = document.createElement('button')
twenty20btn.innerText = '2020'
buttonsContainer.appendChild(twenty20btn)

const twenty20 = async () => {
  const getData = await axios.get(gamesUrl, {
    params: {
      dates: `2020-01-01,2020-12-31`,
      ordering: `-rating`,
      key: apiKey
    }
  })
  for (let i = 0; i < 5; i++) {
    let game = document.createElement('p')
    game.innerText = `${getData.data.results[i].name}`
    gamesContainer.appendChild(game)
  }
}

twenty20btn.addEventListener('click', ()=>{
  gamesContainer.innerHTML = ``
  twenty20()
})

// THIS CODE CAN BE USED TO CHECK THE CONNECTION TO THE RAWG API VIA AXIOS
// const testBtn = document.createElement('button')
// testBtn.innerText = 'test connection 👂'
// document.body.appendChild(testBtn)

// const axiosTest = async () => {
//   const getData = await axios.get('https://api.rawg.io/api/games', {
//     params: {
//       dates: `2019-01-01,2019-12-31`,
//       ordering: `-rating`,
//       key: apiKey
//     }})
//   console.log(getData)
//   }

// testBtn.addEventListener('click', () => {
//   axiosTest()
// })