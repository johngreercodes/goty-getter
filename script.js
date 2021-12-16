const apiKey = `20862006752d4ed99d821ff4b2a41c0c`
const gamesUrl = `https://api.rawg.io/api/games`

const btn = document.body.querySelector('#get-games-button')

const axiosTest = async () => {
  const getData = await axios.get('https://api.rawg.io/api/games', {
    params: {
      key: apiKey
    }})
  console.log(getData.status)
  }

btn.addEventListener('click', () => {
  axiosTest()
})

//////////////

const twenty19btn = document.createElement('button')
twenty19btn.innerText = '2019'
document.body.appendChild(twenty19btn)

const twenty19 = async () => {
  const getData = await axios.get(gamesUrl, {
    params: {
      dates: `2019-01-01,2019-12-31`,
      ordering: `-rating`,
      key: apiKey
    }
  })
  console.log(getData.data.results)
}

twenty19btn.addEventListener('click', ()=>{
  twenty19();
})