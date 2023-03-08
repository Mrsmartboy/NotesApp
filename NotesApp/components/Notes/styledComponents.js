import styled from 'styled-components'

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #d8d8d8;
  padding: 10px;
  width: 100%;
`

export const MainHeading = styled.h1`
  color: #4c63b6;
  font-size: 25px;
  font-weight: bold;
  font-family: 'Bree Serif';
`

export const NotesCardContainer = styled.form`
  background-color: #ffffff;
  box-shadow: 3px 3px 3px 3px #aab8c8;
  padding: 20px;
  margin: 20px;
  width: 800px;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 576px) {
    width: 200px;
    height: 300px;
  }
`

export const TitleInput = styled.input`
  outline: none;
  border: None;
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const DescriptionText = styled.textarea`
  outline: none;
  border: None;
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Button = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  padding: 10px;
  border: none;
  outline: none;
  align-self: flex-end;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Roboto';
`

export const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 800px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageElement = styled.img`
  width: 100px;
  height: 100px;
`

export const NoteHeading = styled.h1`
  color: #475569;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
`

export const NotePara = styled.p`
  color: #475569;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: bold;
`
