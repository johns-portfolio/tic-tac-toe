import React, { useState } from 'react'
import { getAllBlocks, getWinner } from '../../stores/features/blockSlice'
import { useAppSelector } from '../../stores/hooks'
import Block from './Block'

const Body = () => {
  const blocks = useAppSelector(getAllBlocks)
  const winner = useAppSelector(getWinner)

  return (
    <div className="p-10 bg-[#14bdac] relative">
      <div className="grid grid-cols-3 gap-0 max-w-md mx-auto">
        {blocks.map((c, i) => (
          <Block key={i} block={c} />
        ))}
      </div>
      {winner && (
        <div className="text-center animate-ping-show absolute bg-[#00CCBB] bg-opacity-80 top-28 p-10 left-0 w-full border-red border-2">
          <div className="text-9xl">{winner}</div>
          <div className="uppercase">Winner!</div>
        </div>
      )}
    </div>
  )
}

export default Body
