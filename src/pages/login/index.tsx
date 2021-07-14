import React from 'react'
import Head from 'next/head'
import * as S from '../../styles/components/login'
import logoSpark from '../../assets/brand/logo-spark.svg'
import logoMatchbox from '../../assets/brand/logo-matchbox.png'

const Login: React.FC = () => {
  return (
    <>
      <Head>Login</Head>
      <S.Main>
        <S.LeftSection>
          <img src={logoSpark} />
          <S.Header>Bem-vindo(a)</S.Header>
          <S.Paragraph>
            Por favor, digite suas credenciais para prosseguir.
          </S.Paragraph>
          <S.Footer>
            powered by <img src={logoMatchbox} />
          </S.Footer>
        </S.LeftSection>
        <S.RightSection>Carousel</S.RightSection>
      </S.Main>
    </>
  )
}

export default Login
