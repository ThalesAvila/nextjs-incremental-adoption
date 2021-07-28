import React from 'react'
import Head from 'next/head'
import { Form, Row } from 'reactstrap'
import * as S from '@/styles/pages/login'
import AuthCard from '@/components/AuthCard'

const Login = () => {
  return (
    <>
      <Head>Login</Head>
      <Row>
        <S.Section backgroundColor="#FFF" md="4" lg="4">
          <AuthCard
            title="Bem-vindo(a)"
            subtitle="Por favor, digite suas credenciais para prosseguir."
          >
            <Form>Form</Form>
          </AuthCard>
        </S.Section>
        <S.Section md="8" lg="8">
          Carousel
        </S.Section>
      </Row>
    </>
  )
}

export default Login
