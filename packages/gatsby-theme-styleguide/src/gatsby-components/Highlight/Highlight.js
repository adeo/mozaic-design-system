import React from 'react'
import styled, { css } from 'styled-components'

import {
  ColorInfo100,
  ColorInfo500,
  ColorInfo700,
  ColorWarning100,
  ColorWarning500,
  ColorWarning700,
  ColorGrey100,
  ColorGrey500,
  ColorGrey700,
} from '@mozaic-ds/tokens/build/js/tokens'

const defaultTitles = {
  info: 'Information',
  warning: 'Warning',
  tips: 'Useful tip',
}

const Container = styled.div`
  margin: 2rem 0;
  padding: 1rem 1.5rem 2rem;

  ${({ theme }) =>
    theme === 'info'
      ? css`
          background-color: ${ColorGrey100};
          border-left: solid 8px ${ColorGrey500};
        `
      : theme === 'warning'
      ? css`
          background-color: ${ColorWarning100};
          border-left: solid 8px ${ColorWarning500};
        `
      : theme === 'tips' &&
        css`
          background-color: ${ColorInfo100};
          border-left: solid 8px ${ColorInfo500};
        `}
`

export const Theme = styled.div`
  font-size: 0.875rem;
  line-height: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  ${({ theme }) =>
    theme === 'info'
      ? css`
          color: ${ColorGrey700};
        `
      : theme === 'warning'
      ? css`
          color: ${ColorWarning700};
        `
      : theme === 'tips' &&
        css`
          color: ${ColorInfo700};
        `}
`

const Content = styled.div`
  margin-top: 0.5rem;

  > :first-child {
    margin-top: 0;
  }
  > :last-child {
    margin-bottom: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 0.5em;

    ${({ theme }) =>
      theme === 'info'
        ? css`
            color: ${ColorGrey700};
          `
        : theme === 'warning'
        ? css`
            color: ${ColorWarning700};
          `
        : theme === 'tips' &&
          css`
            color: ${ColorInfo700};
          `}
  }
`

const Highlight = ({ children, theme = 'info', title }) => (
  <Container theme={theme}>
    <Theme theme={theme}>{title ? title : defaultTitles[theme]}</Theme>
    <Content theme={theme}>{children}</Content>
  </Container>
)

export default Highlight
