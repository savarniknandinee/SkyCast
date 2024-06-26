import { useState } from 'react'

import './App.css'

import search from './assets/icons/search.svg'
import { useStateContext } from './Context'
import logo from './assets/icons/logo.png'
import {BackgroundLayout, WeatherCard, MiniCard} from './Components'


function App() {

  const [input, setInput] = useState('')

  const {weather, location, values, place, setPlace } = useStateContext()
  //console.log(weather)

  const submitCity = () => {
    setPlace(input)
    setInput('')

  }


  return (
    <div className='w-full h-screen text-white px-8'>
      <nav className='navbar w-full p-3 flex justify-between items-center bg-gray-800 text-white shadow-lg left-0 right-0 '>
        <div className='flex items-center'>
          <img src={logo} alt="logo" className='w-12 h-12 mr-2' />
          <h1 className='font-bold tracking-black text-3xl'>SkyCast</h1>
        </div>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
          <img src={search} alt="search" className='w-[1.7rem] h-[1.7rem]' />
          <input onKeyUp={(e) => {
            if(e.key === 'Enter') {
              //submit the form
              submitCity()
            }
          }} type="text" placeholder='Search City' className='focus:outline-none w-full text-[#212121] text-lg'  value={input} onChange={e => setInput(e.target.value)}/>
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
        <WeatherCard
        place={location}
        windspeed={weather.wspd}
        humidity={weather.humidity}
        temperature={weather.temp}
        heatIndex={weather.heatindex}
        iconString={weather.conditions}
        conditions={weather.conditions}
        />
        <div className='flex justify-center gap-8 flex-wrap w- [60%] '>
          {
            values?.slice(1,7).map(curr => {
              return (
                <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
                />
              )
            })
          }

        </div>


      </main>
      <footer className="navbar w-full p-3 flex justify-center items-center bg-gray-800 text-white shadow-lg left-0 right-0">
        <p>&copy; 2023 Skycast - Nandini</p>
      </footer>
    </div>
  )
}

export default App
