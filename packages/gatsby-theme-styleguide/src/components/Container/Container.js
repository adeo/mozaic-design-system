import styled from 'styled-components'
import { MagicUnit } from '@mozaic-ds/tokens/build/js/tokens.js'

export default styled.div`
  padding: ${MagicUnit}rem ${MagicUnit * 2}rem;

  @media screen and (min-width: 1024px) {
    padding-left: ${MagicUnit * 3}rem;
    padding-right: ${MagicUnit * 3}rem;
  }
`
