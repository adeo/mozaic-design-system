import React from 'react'
import styled, { css } from 'styled-components'

const CodeButton = styled.button`
  ${isActive =>
    isActive ? `background-color: lightblue;` : `background-color: #999;`};
`
const Preformated = styled.pre`
  max-height: 600px;
  max-width: 100%;
  overflow: auto;

  ${({ fullScreen }) =>
    fullScreen &&
    css`
      width: 100%;
      max-height: none;
      overflow: none;

      code {
        overflow: none;
      }
    `};
`

const Body = styled.div`
  flex: 1;
  overflow: auto;
`

const patternCodeSample = ({
  pattern,
  copyCompatible,
  showCode,
  getLanguage,
  currentCodeSample,
  copied,
  copyCodeToClipBoard,
  fullScreen,
}) => {
  return (
    <>
      <div>
        {Object.keys(pattern).map(codeSampleName => (
          <CodeButton
            isActive={codeSampleName === currentCodeSample}
            key={`${pattern}${codeSampleName}`}
            onClick={() => showCode(codeSampleName)}
          >
            {codeSampleName}
          </CodeButton>
        ))}
        {copyCompatible && (
          <button style={{ float: 'right' }} onClick={copyCodeToClipBoard}>
            {copied ? 'copied' : 'copy code'}
          </button>
        )}
      </div>

      <Body>
        {currentCodeSample && (
          <Preformated fullScreen={fullScreen}>
            <code className={`language-${getLanguage(currentCodeSample)}`}>
              {pattern[currentCodeSample]}
            </code>
          </Preformated>
        )}
      </Body>
    </>
  )
}
export default patternCodeSample
