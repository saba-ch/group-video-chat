import React, { useEffect, useRef, useState } from 'react'
import { Instance } from 'simple-peer'
import { FiMic, FiMicOff, FiCamera, FiCameraOff } from 'react-icons/fi'

import {
  StyledVideo,
  StyledContainer,
  StyledVideoButton,
  StyledAudioButton
} from './VideoStyles'

interface VideoProps {
  peer?: Instance
  currentUser?: boolean
  muted?: boolean
  height?: number
  stream?: MediaStream
}

const videoConstraints = {
  height: 400,
  width: 700
}

const Video = ({ peer, currentUser, muted, height, stream }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const currStream = useRef<MediaStream>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isVideo, setIsVideo] = useState(true)

  useEffect(() => {
    if(currentUser) {
      if(stream) {
        videoRef.current!.srcObject = stream
        // @ts-ignore
        currStream.current = stream
        if (currentUser) {
          setIsMuted(stream.getAudioTracks()[0].enabled)
          setIsVideo(stream.getVideoTracks()[0].enabled)
        }
      } else {
        navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: true }).then(stream => {
          videoRef.current!.srcObject = stream
          // @ts-ignore
          currStream.current = stream
          if(currentUser) {
            setIsMuted(stream.getAudioTracks()[0].enabled)
            setIsVideo(stream.getVideoTracks()[0].enabled)
          }
        })
      }
    } else {
      peer!.on('stream', (stream: MediaStream) => {
        videoRef.current!.srcObject = stream
      })
    }
  }, [peer, currentUser, stream])

  const toggleMute = () => {
    if (currStream?.current?.getAudioTracks()[0]) {
      currStream.current.getAudioTracks()[0].enabled = !(currStream?.current?.getAudioTracks()[0].enabled)
      setIsMuted(state => !state)
    }
  }

  const toggleVideo = () => {
    if (currStream?.current?.getVideoTracks()[0]) {
      currStream.current.getVideoTracks()[0].enabled = !(currStream?.current?.getVideoTracks()[0].enabled)
      setIsVideo(state => !state)
    }
  }

  return (
    <StyledContainer height={height}>
      <StyledVideo
        muted={muted}
        playsInline
        autoPlay
        ref={videoRef}
      />
      {currentUser && (
        <StyledAudioButton onClick={toggleMute}>
          {isMuted && <FiMic color='#fff' />}
          {!isMuted && <FiMicOff color='#fff' />}
        </StyledAudioButton>
      )}
      {currentUser && (
        <StyledVideoButton onClick={toggleVideo}>
          {isVideo && <FiCamera color='#fff' />}
          {!isVideo && <FiCameraOff color='#fff' />}
        </StyledVideoButton>
      )}
    </StyledContainer>
  )
}

export default Video
