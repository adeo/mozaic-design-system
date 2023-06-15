import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const AreaContainer = styled.div`
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 3rem;

  @media (min-width: 680px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 1280px) {
    padding-bottom: 5rem;
  }

  @media (min-width: 1280px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`

const AreaTitle = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.156;
`

const BlockContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 1.5rem;

    @media (min-width: 1280px) {
      margin-bottom: 0;
    }
  }
`

const BlockTitle = styled.h3`
  font-size: 1.375rem;
  line-height: 1.182;
  margin-bottom: 12px;
  margin-top: 0;
`

const BlockIndex = styled.span`
  display: block;
  font-size: 2.875rem;
  font-weight: normal;
  line-height: 1.174;
  margin-bottom: 1rem;
`

const BlockText = styled.p`
  margin: 0;
`

const Block = ({ index, title, text }) => (
  <BlockContainer className="ml-flexy__col ml-flexy__col--full ml-flexy__col--1of3@from-l">
    <BlockTitle>
      <BlockIndex>{index}</BlockIndex> {title}
    </BlockTitle>
    <BlockText>{text}</BlockText>
  </BlockContainer>
)

const AreaValues = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allHomeJson {
        nodes {
          ourvalues {
            text
            title
          }
        }
      }
    }
  `).allHomeJson.nodes[0].ourvalues

  return (
    <AreaContainer>
      <AreaTitle>Our values</AreaTitle>
      <div className="ml-flexy ml-flexy--gutter">
        {data.map((block, index) => {
          return (
            <Block
              key={index}
              index={`#${index + 1}`}
              title={block.title}
              text={block.text}
            />
          )
        })}
      </div>
    </AreaContainer>
  )
}

export default AreaValues
