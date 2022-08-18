import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type BlockItem = {
  id: number
  user?: User
}

export type User = 'X' | 'O'

export interface BlockState {
  blocks: BlockItem[]
  currentUser: User
  winner?: User
}

const initialState: BlockState = {
  blocks: [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    },
    {
      id: 7
    },
    {
      id: 8
    },
    {
      id: 9
    }
  ],
  currentUser: 'X',
  winner: undefined
}

export const blockSlice = createSlice({
  name: 'blocks',
  initialState,
  reducers: {
    reserveBlock: (state, action: PayloadAction<BlockItem>) => {
      if (state.winner) {
        return
      }

      const existItem = state.blocks.find((c) => c.id === action.payload.id)
      if (existItem && !existItem.user) {
        existItem.user = action.payload.user

        // Check Winner
        const winner = isWinner(state.blocks, state.currentUser)
        if (winner) {
          state.winner = state.currentUser
        } else {
          // Switch user
          state.currentUser = state.currentUser === 'X' ? 'O' : 'X'
        }
      }
    },
    resetAllBlocks: (state) => {
      return { ...initialState }
    },
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload
    },
    setWinner: (state, action: PayloadAction<User>) => {
      state.winner = action.payload
    }
  }
})

const isWinner = (blocks: BlockItem[], currentUser: User): boolean => {
  const ownBlocks = blocks
    .filter((c) => c.user === currentUser)
    .map((c) => c.id)
  console.log('🔥 ownBlocks', ownBlocks)
  if (ownBlocks.length < 3) {
    return false
  }

  const winRules = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

    [1, 5, 9],
    [3, 5, 7],

    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
  ]

  for (const rule of winRules) {
    const isWin = rule.every((c) => ownBlocks.includes(c))
    console.log('🔥 rule', rule, isWin)
    if (isWin) {
      return true
    }
  }

  return false
}

// Action creators are generated for each case reducer function
export const { resetAllBlocks, reserveBlock, setCurrentUser, setWinner } =
  blockSlice.actions

export const getAllBlocks = (state: RootState) => state.blocks
export const getCurrentUser = (state: RootState) => state.currentUser
export const getWinner = (state: RootState) => state.winner

export default blockSlice.reducer
