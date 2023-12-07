import React from 'react'
import styled, { css } from 'styled-components'

const HintTitle = styled.h4`
  color: ${({ type }) => (type === 'dont' ? 'FireBrick' : 'ForestGreen')};
  margin-top: 0 !important;
  line-height: 2.3em;
  border-top: solid 4px
    ${({ type }) => (type === 'dont' ? 'FireBrick ' : 'ForestGreen ')};
`

const Container = styled.div`
  margin: 2rem 0;
`

const HintBox = styled.div`
  border: solid 1px
    ${({ type }) => (type === 'dont' ? 'FireBrick' : 'ForestGreen')};
  padding: 15px;
  border-bottom: 0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  .gatsby-highlight {
    margin: 0;
  }

  > div,
  > div > div {
    margin: 0 !important;
  }
`

const HintItemStyle = styled.div`
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  padding: 15px;

  ${({ dont }) =>
    dont
      ? css`
          color: FireBrick;
        `
      : css`
          color: ForestGreen;
        `};

  &:last-child {
    border-bottom: 0;
  }

  &:before {
    display: inline-block;
    padding-right: 8px;
    font-size: 1.3em;
    ${({ dont }) =>
      dont
        ? css`
            color: FireBrick;
            content: '✕';
          `
        : css`
            color: ForestGreen;
            content: '✔';
          `};
  }
`

export const HintItem = ({ children, dont }) => (
  <HintItemStyle dont={dont}>{children}</HintItemStyle>
)

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
