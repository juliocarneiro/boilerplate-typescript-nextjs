import * as S from './styles'

const Main = ({
  title = 'Boilerplate',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
     <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration alt="Logo" src="/img/logo.svg" />
  </S.Wrapper>
)

export default Main
