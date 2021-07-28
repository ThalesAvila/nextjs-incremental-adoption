import React from 'react'
import { Row, Col } from 'reactstrap'
import * as S from '@/styles/pages/login'
import logoSpark from '../../assets/brand/logo-spark.svg'
import logoMatchbox from '../../assets/brand/logo-matchbox.png'

const AuthCard: React.FC<{
  children: React.ReactNode
  title: string
  subtitle: string
}> = ({ children, title, subtitle }) => {
  return (
    <Row>
      <Col>
        <img src={logoSpark} />
        <S.Header>{title}</S.Header>
        <S.Paragraph>{subtitle}</S.Paragraph>
        {children}
        <S.Footer>
          powered by <img src={logoMatchbox} />
        </S.Footer>
      </Col>
    </Row>
  )
}

export default AuthCard
