import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const htmlContent = (el) => {
  return {
    __html: el,
  }
}

const Container = styled.div`
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 680px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 1280px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`

const AreaContainer = styled(Container)``

const AreaWrapper = styled(Container)`
  background: #ecfcfd;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  padding-top: 2.5rem;

  @media (max-width: 767px) {
    margin-left: -1rem;
    margin-right: -1rem;
  }

  @media (min-width: 1280px) {
    margin-bottom: 3.5rem;
  }
`

const AreaWrap = styled.div`
  align-items: stretch !important;
`

const AreaTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.156;
  margin-bottom: 1rem;
  margin-top: 0;

  @media (min-width: 1280px) {
    padding-top: 2.5rem;
  }
`

const AreaHat = styled.p`
  font-size: 1rem;
  line-height: 1.188;
  margin-bottom: 2rem;
  margin-top: 0;
`

const CardTitle = styled.h3`
  margin-bottom: 1.5rem;
  margin-top: 0;
`

const CardIcon = styled.span`
  display: block;
  height: 2.5rem;
  margin: 0;
  width: 2.5rem;
`

const CardText = styled.p`
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.167;
  margin-bottom: 1rem;
  margin-top: 0;
`

const CardLink = styled.a`
  background: #ffffff;
  border: 2px solid #000000;
  color: #000000;
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  padding: 12px 1.5rem;
`

const Card = ({ className, icon, title, text, link, linkLabel }) => (
  <div
    className={`${className} ml-flexy__col ml-flexy__col--full ml-flexy__col--1of3@from-xl`}
  >
    <div className="card-contact">
      <CardTitle>
        <CardIcon>
          <img src={icon} alt="" />
        </CardIcon>
        <span className="sr-only">{title}</span>
      </CardTitle>
      <CardText dangerouslySetInnerHTML={htmlContent(text)} />
      <CardLink href={link} target="_blank">
        {linkLabel}
      </CardLink>
    </div>
  </div>
)

const StyledCard = styled(Card)`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 1.5rem;

    @media (min-width: 1280px) {
      margin-bottom: 0;
    }
  }

  .card-contact {
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
    padding: 2rem 1.5rem 2.5rem;
  }
`

const AreaContact = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allHomeJson {
        nodes {
          contactus {
            icon
            link
            linkLabel
            text
            title
          }
        }
      }
    }
  `).allHomeJson.nodes[0].contactus

  return (
    <AreaContainer>
      <AreaWrapper>
        <AreaWrap className="ml-flexy ml-flexy--gutter">
          <div className="ml-flexy__col ml-flexy__col--full ml-flexy__col--1of3@from-xl">
            <AreaTitle>Need to contact us?</AreaTitle>
            <AreaHat>
              You can speak with Mozaic Design System team on different
              channels. Choose the channel that suits you the best and we’ll be
              happy to give you and your team the support need.
            </AreaHat>
          </div>
          {/* {cards} */}
          {data.map((card, index) => {
            return (
              <StyledCard
                key={index}
                title={card.title}
                text={card.text}
                icon={card.icon}
                link={card.link}
                linkLabel={card.linkLabel}
              />
            )
          })}
        </AreaWrap>
      </AreaWrapper>
    </AreaContainer>
  )
}

export default AreaContact
