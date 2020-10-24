import styled from 'styled-components'

export const StyledVideo = styled.video`
  height: 100%;
  border-radius: 6%;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.28);
`

export const StyledContainer = styled.div<{ height?: number }>`
  height: ${({ height }) => height ? `${height}vh` : '200px'};
  position: relative;
`

export const StyledVideoButton = styled.button`
  position: absolute;
  left: 80%;
  bottom: 10px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const StyledAudioButton = styled.button`
  position: absolute;
  border: none;
  left: 30%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 10px;
`