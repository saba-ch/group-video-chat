import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: grid;
  height: 100vh;
`

export const StyledOptions = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  align-content: center;
  grid-gap: 30px;
`

export const StyledCreateButton = styled.button`
  margin: 0 auto;
  background-color: #fff;
  color: #666;
	border-radius: 28px;
	border: 1px solid #dcdcdc;
	display: inline-block;
	cursor: pointer;
	font-family: Arial;
	font-size: 17px;
	padding: 16px 26px;
	text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
  :active {
	  position:relative;
	  top:1px;
  }
`

export const StyledJoinInput = styled.input`
  border: 0;
  padding: 7px 0;
  border-bottom: 1px solid #ccc;
  outline: none;
  width: 100%;
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
	padding: 10px 20px;
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

export const StyledJoinForm = styled.form`
  display: grid;
  width: 20vw;
  align-items: center;
  grid-gap: 10px;
`

export const StyledOrLabel = styled.p`
  text-align: center;
`
