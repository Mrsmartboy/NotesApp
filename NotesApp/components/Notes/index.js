import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  NotesContainer,
  MainHeading,
  NotesCardContainer,
  TitleInput,
  DescriptionText,
  Button,
  UnorderedList,
  Container,
  ImageElement,
  NoteHeading,
  NotePara,
} from './styledComponents'

const Notes = () => {
  const [text, setText] = useState('')
  const [textArea, setTextArea] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeText = event => setText(event.target.value)
  const onChangeTextArea = event => setTextArea(event.target.value)

  const onSubmitForm = event => {
    event.preventDefault()

    const newNote = {
      id: uuidv4(),
      text,
      textArea,
    }

    setNotesList(prevState => [...prevState, newNote])
    setText('')
    setTextArea('')
  }

  const Value = notesList.length > 0

  return (
    <NotesContainer>
      <MainHeading>Notes</MainHeading>
      <NotesCardContainer onSubmit={onSubmitForm}>
        <TitleInput
          type="text"
          placeholder="Title"
          onChange={onChangeText}
          value={text}
        />
        <DescriptionText
          rows="6"
          cols="6"
          placeholder="Take a Note..."
          onChange={onChangeTextArea}
          value={textArea}
        />
        <Button type="submit">Add</Button>
      </NotesCardContainer>

      {Value ? (
        <UnorderedList>
          {notesList.map(eachItem => (
            <NoteItem key={eachItem.id} eachNote={eachItem} />
          ))}
        </UnorderedList>
      ) : (
        <Container>
          <ImageElement
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt=" notes empty"
          />
          <NoteHeading>No Notes Yet</NoteHeading>
          <NotePara>Notes you add will appear here</NotePara>
        </Container>
      )}
    </NotesContainer>
  )
}

export default Notes
