import React from 'react'
import styled from 'styled-components'

const CodeButton = styled.button`
  ${isActive =>
    isActive ? `background-color: lightblue;` : `background-color: #999;`};
`

const patternCodeSample = ({
  pattern,
  copyCompatible,
  showCode,
  getLanguage,
  currentCodeSample,
  copied,
  copyCodeToClipBoard,
}) => {
  return (
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
      {currentCodeSample && (
        <div>
          <pre>
            <code className={`language-${getLanguage(currentCodeSample)}`}>
              {pattern[currentCodeSample]}
            </code>
          </pre>
        </div>
      )}
    </div>
  )
}
export default patternCodeSample
