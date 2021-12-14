// API reference: https://api.rawg.io/docs/
// next to-do: hook up button-click with returning API data

const btn = document.body.querySelector('#get-games-button')

btn.addEventListener('click', () => {
    console.log('click click!')
  })

let gameTest = async () => {
let gameResults = await axios.get('https://api.rawg.io/api/games', {
  params: {
    key: `20862006752d4ed99d821ff4b2a41c0c`
  }
})
}

console.log(gameTest)
console.log('test')
