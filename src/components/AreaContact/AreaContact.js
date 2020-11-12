import React from 'react'
import styled from 'styled-components'

const htmlContent = el => {
  return {
    __html: el,
  }
}

const CardTitle = styled.h3`
  margin-bottom: 24px;
  margin-top: 0;
`

const CardIcon = styled.span`
  display: block;
  height: 40px;
  margin: 0;
  width: 40px;
`

const CardText = styled.p`
  font-size: 18px;
  font-style: italic;
  line-height: 1.167;
  margin-bottom: 16px;
  margin-top: 0;
`

const CardLink = styled.a`
  background: #ffffff;
  border: 2px solid #000000;
  color: #000000;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  padding: 12px 24px;
`

const Card = ({ className, icon, title, text, link, linkLabel }) => (
  <div
    className={`${className} ml-flexy__col ml-flexy__col--full ml-flexy__col--1of3@from-l`}
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
  &:not(:last-child) {
    margin-bottom: 24px;

    @media (min-width: 1024px) {
      margin-bottom: 0;
    }
  }

  .card-contact {
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
    padding: 32px 24px 40px;
  }
`

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
  margin-bottom: 48px;
  padding-bottom: 48px;
  padding-top: 40px;

  @media (max-width: 767px) {
    margin-left: -1rem;
    margin-right: -1rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 56px;
  }
`

const AreaTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  line-height: 1.156;
  margin-bottom: 16px;
  margin-top: 0;

  @media (min-width: 1024px) {
    padding-top: 40px;
  }
`

const AreaHat = styled.p`
  font-size: 16px;
  line-height: 1.188;
  margin-bottom: 32px;
  margin-top: 0;
`

const AreaContact = props => {
  const cards = props.cards.map((card, index) => (
    <StyledCard
      key={index}
      title={card.title}
      text={card.text}
      icon={card.icon}
      link={card.link}
      linkLabel={card.linkLabel}
    />
  ))

  return (
    <AreaContainer>
      <AreaWrapper>
        <div className="ml-flexy ml-flexy--gutter">
          <div className="ml-flexy__col ml-flexy__col--full ml-flexy__col--1of3@from-l">
            <AreaTitle>Need to contact us?</AreaTitle>
            <AreaHat>
              You can speak with Mozaic Design System team on different
              channels. Choose the channel that suits you the best and we’ll be
              happy to give you and your team the support need.
            </AreaHat>
          </div>
          {cards}
        </div>
      </AreaWrapper>
    </AreaContainer>
  )
}

export default AreaContact
