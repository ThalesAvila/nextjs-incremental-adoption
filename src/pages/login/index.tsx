import React, { useState } from 'react'
import Head from 'next/head'
import { Form, Row } from 'reactstrap'
import * as S from '@/styles/pages/login'
import AuthCard from '@/components/AuthCard'
import Input from '@/components/Input'
import Button from '@/components/Button'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Head>Login</Head>
      <Row>
        <S.Section backgroundcolor="#FFF" md="4" lg="4">
          <AuthCard
            title="Bem-vindo(a)"
            subtitle="Por favor, digite suas credenciais para prosseguir."
          >
            <Form>
              <Input
                isRequired
                type="email"
                id="email"
                textLabel="Email"
                placeholder="Insira seu email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Input
                isRequired
                type="password"
                id="password"
                textLabel="Senha"
                placeholder="Insira sua senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Button
                block
                color="primary"
                className="my-4"
                type="submit"
                disabled={!email || !password}
                loading={false}
              >
                Entrar
              </Button>
            </Form>
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
