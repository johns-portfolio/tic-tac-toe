import { XIcon } from '@heroicons/react/outline'
import React from 'react'
import {
  BlockItem,
  getCurrentUser,
  reserveBlock
} from '../../stores/features/blockSlice'
import { useAppDispatch, useAppSelector } from '../../stores/hooks'

const Block = ({ block }: { block: BlockItem }) => {
  const user = useAppSelector(getCurrentUser)
  const dispatch = useAppDispatch()

  return (
    <button
      onClick={() => {
        dispatch(reserveBlock({ id: block.id, user: user }))
      }}
      type="button"
      className={`border-[#4bd2c5] h-32 ${block.id < 7 && 'border-b-4'} ${
        ![3, 6, 9].includes(block.id) && 'border-r-4'
      }`}
    >
      {block.user === 'X' ? (
        <XIcon className="text-gray-500 bottom-1 text-sm relative -top-2" />
      ) : block.user === 'O' ? (
        <span className="text-9xl">O</span>
      ) : (
        ''
      )}
    </button>
  )
}

export default Block
