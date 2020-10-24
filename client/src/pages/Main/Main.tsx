import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { v1 as uuid } from 'uuid'

import {
  StyledContainer,
  StyledCreateButton,
  StyledJoinButton,
  StyledJoinForm,
  StyledJoinInput,
  StyledOrLabel,
  StyledOptions,
} from './MainStyles'

const Main = () => {
  const [roomId, setRoomId] = useState('')
  const history = useHistory()

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    history.push(`/room/${roomId}`)
  }

  const createRoom = () => {
    const roomId = uuid()
    history.push(`/room/${roomId}`)
  }

  return (
    <StyledContainer>
      <StyledOptions>
        <StyledJoinForm onSubmit={handleSubmit}>
          <StyledJoinInput
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            type='text'
            required
            placeholder='Room Id'
          />
          <StyledJoinButton type='submit'>
            Join Room
          </StyledJoinButton>
        </StyledJoinForm>
        <StyledOrLabel>
          OR
        </StyledOrLabel>
        <StyledCreateButton onClick={createRoom}>
          Create Room
        </StyledCreateButton>
      </StyledOptions>
    </StyledContainer>
  )
}

export default Main
