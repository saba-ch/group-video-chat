import styled from 'styled-components'

export const StyledContainer = styled.div`
  
`

export const StyledVideoContainer = styled.div`
  height: 35vh;
  width: 30vw;
  border-radius: 6%;
  background-color: transparent;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.28);
`

export const StyledSubContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
`

export const StyledConfirmJoin = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
  grid-gap: 20px;
`

export const StyledHeader = styled.h2`
  font-size: 30px;
  text-align: center;
`

export const StyledMeetingUrl = styled.p`

`

export const StyledJoinButton = styled.button`
  margin: 0 auto;
  background-color: #44c767;
	border-radius: 28px;
	border: 1px solid #18ab29;
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
	font-family: Arial;
	font-size: 17px;
	padding: 15px 50px;
	text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
  :hover {
    background-color:#5cbf2a;
  }
  :active {
	  position:relative;
	  top:1px;
  }
`