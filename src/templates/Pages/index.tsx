import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'

const PageTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline />
      </LinkWrapper>
      <S.Heading>My Trips</S.Heading>

      <S.Body>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
          rutrum massa, ut gravida tortor. Vestibulum et velit eget purus
          bibendum dapibus id pellentesque orci. Sed vehicula, ipsum sed
          ultricies lobortis, mi magna sollicitudin erat, id pellentesque nulla
          mi nec nunc. Sed a nisl non metus mattis tincidunt. Sed dignissim
          neque non est blandit, sit amet commodo ligula congue. Phasellus
          cursus sed eros sed sagittis.
        </p>
      </S.Body>
    </S.Content>
  )
}

export default PageTemplate
