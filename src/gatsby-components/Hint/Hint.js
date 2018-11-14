import React from 'react'
import styled from 'styled-components'

const HintTitle = styled.h4`
  color: ${({ type }) => (type === 'dont' ? 'FireBrick' : 'ForestGreen')};
  margin-top: 0;
  line-height: 2.3em;
  border-top: solid 4px
    ${({ type }) => (type === 'dont' ? 'FireBrick ' : 'ForestGreen ')};
`

const Container = styled.div`
  margin: 3rem 0;
`

const HintBox = styled.div`
  background-color: ${({ type }) =>
    type === 'dont' ? 'LightPink' : 'LightGreen'};
  padding: 15px;

  .gatsby-highlight {
    margin: 0;
  }
`

const Hint = ({ title, children, contentType = 'text', type = 'do' }) => (
  <Container>
    {contentType === 'text' && <HintBox type={type}>{children}</HintBox>}

    {contentType === ('css' || 'javascript' || 'html') && (
      <HintBox type={type} data-language={contentType}>
        <pre className={`language-${contentType} gatsby-highlight`}>
          <code className={`language-${contentType}`}>{children}</code>
        </pre>
      </HintBox>
    )}

    <HintTitle type={type}>{title}</HintTitle>
  </Container>
)

export default Hint
