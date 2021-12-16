const apiKey = `20862006752d4ed99d821ff4b2a41c0c`
const gamesUrl = `https://api.rawg.io/api/games`

const testBtn = document.createElement('button')
testBtn.innerText = 'test connection 👂'
document.body.appendChild(testBtn)

const axiosTest = async () => {
  const getData = await axios.get('https://api.rawg.io/api/games', {
    params: {
      dates: `2019-01-01,2019-12-31`,
      ordering: `-rating`,
      key: apiKey
    }})
  console.log(getData)
  }

testBtn.addEventListener('click', () => {
  axiosTest()
})

////////////// 2019 btn

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
  for (let i = 0; i < 5; i++) {
    document.querySelector('h3').innerText += getData.data.results[i].name
  }
}

twenty19btn.addEventListener('click', ()=>{
  twenty19()
})

// document.querySelector('h3').innerText = 'bye'