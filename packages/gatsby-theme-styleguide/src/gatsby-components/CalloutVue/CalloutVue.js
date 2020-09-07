import React from 'react'
import styled from 'styled-components'
import { DisplayExternalLink16 } from '@mozaic-ds/icons/react'

const VueJSBlock = styled.div`
  display: flex;
  align-items: center;
  background-color: #ecfcfd;
  border: 1px solid rgb(37, 168, 208);
  padding: 1.375rem 0 1.125rem 1.5rem;
  color: rgb(30, 95, 130);
  font-size: 1rem;
  margin: 1rem 0;
`

const Link = styled.a`
  display: flex;
  align-items: center;
  color: rgb(30, 95, 130);
  font-size: 1rem;
`

const TextLink = styled.span`
  color: rgb(30, 95, 130);
  font-size: 1rem;
  margin-right: 0.5rem;
  text-decoration: underline;
`

const VueIcon = styled.svg`
  margin-left: 0.5rem;
`

const CalloutVue = ({ link }) => {
  return (
    <VueJSBlock>
      <b>Available on: </b>
      <VueIcon
        height="20"
        width="24"
        viewBox="0 0 261 226"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M161.096.001l-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749 0z"
          fill="#41b883"
        />
        <path
          d="M161.096.001l-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001z"
          fill="#34495e"
        />
      </VueIcon>

      <Link target="__blank" href={link}>
        <TextLink>VueJS</TextLink>
        <DisplayExternalLink16 fill="#1e5f82" />
      </Link>
    </VueJSBlock>
  )
}

export default CalloutVue
