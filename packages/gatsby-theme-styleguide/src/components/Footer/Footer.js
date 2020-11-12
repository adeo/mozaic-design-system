import React from 'react'
import styled from 'styled-components'
import logoAdeo from '../../images/Adeo_logo.jpg'
import logoLeroyMerlin from '../../images/Leroy_Merlin.jpg'

const FooterContainer = styled.footer`
  align-items: center;
  border-top: 1px solid #000000;
  display: flex;
  justify-content: center;
  min-height: 11.25rem;
`

const FooterContent = styled.p`
  font-size: 0.875rem;
  line-height: 1.143;
  margin: 0;
  text-align: center;

  span {
    display: block;
    margin-bottom: 1rem;
  }

  img {
    display: inline-block;

    &:first-of-type {
      margin-right: 1rem;
      max-width: 53px;
    }

    &:last-of-type {
      max-width: 62px;
    }
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <span>Mozaic, a product made by</span>
        <img src={logoLeroyMerlin} alt="Leroy Merlin" />
        <img src={logoAdeo} alt="Adeo" />
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
