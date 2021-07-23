import React from 'react'
import Head from 'next/head'
import * as S from '@/styles/components/pages/login'
import { Row, Col } from '@/styles/components'
import logoSpark from '../../assets/brand/logo-spark.svg'
import logoMatchbox from '../../assets/brand/logo-matchbox.png'

const Login: React.FC = () => {
  return (
    <>
      <Head>Login</Head>
      <Row>
        <Col lg="4" md="4">
          <img src={logoSpark} />
          <S.Header>Bem-vindo(a)</S.Header>
          <S.Paragraph>
            Por favor, digite suas credenciais para prosseguir.
          </S.Paragraph>
          <S.Footer>
            powered by <img src={logoMatchbox} />
          </S.Footer>
        </Col>
        <Col lg={8} md={8}>
          Carousel
        </Col>
      </Row>
    </>
  )
}

export default Login
