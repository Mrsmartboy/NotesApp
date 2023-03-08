import {ItemContainer, TextHeading, Paragraph} from './styledComponents'

const NoteItem = props => {
  const {eachNote} = props
  const {text, textArea} = eachNote
  return (
    <ItemContainer>
      <TextHeading>{text}</TextHeading>
      <Paragraph>{textArea}</Paragraph>
    </ItemContainer>
  )
}

export default NoteItem
