import React from 'react'
import Head from 'next/head'
import { Form, Row } from 'reactstrap'
import * as S from '@/styles/pages/login'
// import { Row } from '@/styles/components'
import AuthCard from '@/components/AuthCard'
import logoSpark from '../../assets/brand/logo-spark.svg'
import logoMatchbox from '../../assets/brand/logo-matchbox.png'

const Login: React.FC = () => {
  return (
    <>
      <Head>Login</Head>
      <Row>
        <S.Section backgroundColor="#FFF" md="4" lg="4">
          <img src={logoSpark} />
          <S.Header>Bem-vindo(a)</S.Header>
          <S.Paragraph>
            Por favor, digite suas credenciais para prosseguir.
          </S.Paragraph>
          <Form>Form</Form>
          <S.Footer>
            powered by <img src={logoMatchbox} />
          </S.Footer>
        </S.Section>
        <S.Section md="8" lg="8">
          Carousel
        </S.Section>
      </Row>
    </>
  )
}

export default Login
