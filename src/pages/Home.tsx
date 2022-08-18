import React from 'react'
import Body from '../components/home/Body'
import Header from '../components/home/Header'
import { resetAllBlocks } from '../stores/features/blockSlice'
import { useAppDispatch } from '../stores/hooks'

const Home = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="bg-black h-screen text-gray-100">
      <Header />
      <Body />
      <div className="text-center text-[#00CCBB] mt-4">
        <button type="button" onClick={() => dispatch(resetAllBlocks())}>
          Restart Game
        </button>
      </div>
    </div>
  )
}

export default Home
