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

const PreviewCodeSample = ({
  preview,
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
        {Object.keys(preview).map(codeSampleName => (
          <CodeButton
            isActive={codeSampleName === currentCodeSample}
            key={`${preview}${codeSampleName}`}
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
              {preview[currentCodeSample]}
            </code>
          </Preformated>
        )}
      </Body>
    </>
  )
}
export default PreviewCodeSample
