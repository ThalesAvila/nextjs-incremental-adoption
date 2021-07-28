import React from 'react'
import { Row, Col } from 'reactstrap'
import * as S from '@/styles/pages/login'
import logoSpark from '../../assets/brand/logo-spark.svg'
import logoMatchbox from '../../assets/brand/logo-matchbox.png'

type AuthCardProps = {
  children: React.ReactNode
  title?: string
  subtitle?: string
}

const AuthCard = ({ children, title, subtitle }: AuthCardProps) => {
  return (
    <Row>
      <Col sm={{ size: 8, offset: 2 }} style={{ paddingTop: '48px' }}>
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
