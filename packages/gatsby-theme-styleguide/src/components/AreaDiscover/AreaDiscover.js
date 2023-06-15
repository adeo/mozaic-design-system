import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const AreaContainer = styled.div`
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  background: #222020;
  margin-bottom: 3rem;
  padding-top: 2.5rem;
  position: relative;

  @media (min-width: 680px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 1280px) {
    margin-bottom: 3.5rem;
  }

  @media (min-width: 1280px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  &::after {
    background: #ffffff;
    bottom: 0;
    content: '';
    height: 4rem;
    left: 0;
    position: absolute;
    right: 0;
    z-index: 0;

    @media (min-width: 1280px) {
      height: 5rem;
    }
  }
`

const AreaTitle = styled.h2`
  color: #ffffff;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.156;
  margin-bottom: 1.5rem;
  margin-top: 0;
`

const AreaWrapper = styled.div`
  align-items: stretch !important;
  position: relative;
  z-index: 1;
`

const CardContainer = styled.div`
  display: flex;
`

const CardLink = styled(Link)`
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  display: block;
  color: #000000;

  .card-discover__img {
    display: block;
  }
`

const CardContent = styled.div`
  padding: 1rem 1.5rem 1.5rem;
`

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.15;
  margin-top: 0;
  margin-bottom: 0.5rem;
`

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.188;
  margin-bottom: 1rem;
  margin-top: 0;
`

const CardCta = styled.p`
  color: #000;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.167;
  margin-bottom: 0;
  margin-top: 0;
  text-decoration: underline;
`

const Card = ({ className, img, title, text, link }) => (
  <CardContainer
    className={`${className} ml-flexy__col ml-flexy__col--full ml-flexy__col--1of3@from-xl`}
  >
    <CardLink to={link}>
      <figure>
        <img src={img} alt="" className="card-discover__img" />
      </figure>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <CardCta>Discover</CardCta>
      </CardContent>
    </CardLink>
  </CardContainer>
)

const StyledCard = styled(Card)`
  &:not(:last-child) {
    margin-bottom: 1.5rem;

    @media (min-width: 1280px) {
      margin-bottom: 0;
    }
  }
`

const AreaDiscover = () => {
  const data = useStaticQuery(graphql`
    query {
      allHomeJson {
        nodes {
          discover {
            img
            link
            text
            title
          }
        }
      }
    }
  `).allHomeJson.nodes[0].discover

  return (
    <AreaContainer>
      <AreaTitle>Discover the product</AreaTitle>
      <AreaWrapper className="ml-flexy ml-flexy--gutter">
        {data.map((card, index) => {
          return (
            <StyledCard
              key={index}
              title={card.title}
              text={card.text}
              img={card.img}
              link={card.link}
            />
          )
        })}
      </AreaWrapper>
    </AreaContainer>
  )
}

export default AreaDiscover
