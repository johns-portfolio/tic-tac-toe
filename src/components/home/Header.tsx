import React from 'react'
import { ShareIcon } from '@heroicons/react/outline'
import { useAppSelector } from '../../stores/hooks'
import { getCurrentUser } from '../../stores/features/blockSlice'

const Header = () => {
  const currentUser = useAppSelector(getCurrentUser)

  return (
    <div className="bg-black p-4">
      <div className="flex flex-row items-center justify-between">
        <span>Play against a friend</span>
        <ShareIcon className="w-6" />
      </div>
      <div className="flex flex-row items-center justify-center gap-4 font-bold mt-8 mb-4">
        <span
          className={`border-2 px-16 py-1 ${
            currentUser === 'X' ? 'border-[#14bdac] text-3xl' : 'border-gray-500'
          }`}
        >
          X
        </span>

        <span
          className={`border-2 px-16 py-1 ${
            currentUser === 'O' ? 'border-[#14bdac] text-3xl' : 'border-gray-500'
          }`}
        >
          O
        </span>
      </div>
    </div>
  )
}

export default Header
