import React from 'react'
import { useParams } from 'react-router-dom'

import Video from 'components/Video'

import {
  StyledContainer,
  StyledSubContainer,
  StyledConfirmJoin,
  StyledHeader,
  StyledMeetingUrl,
  StyledJoinButton,
  StyledVideoContainer
} from './JoinStyles'

const Join = ({ handleJoin, stream }: { handleJoin: () => void, stream?: MediaStream }) => {
  const params = useParams<{ roomId: string }>()

  return (
    <StyledContainer>
      <StyledSubContainer>
        <StyledVideoContainer>
          {stream && <Video currentUser muted height={35} stream={stream} />}
        </StyledVideoContainer>
        <StyledConfirmJoin>
          <StyledHeader>
            Meeting ready:
          </StyledHeader>
          <StyledMeetingUrl>
            {window.location.origin}/room/{params.roomId}
          </StyledMeetingUrl>
          <StyledJoinButton onClick={handleJoin}>
            Join
          </StyledJoinButton>
        </StyledConfirmJoin>
      </StyledSubContainer>
    </StyledContainer>
  )
}

export default Join
