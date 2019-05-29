import React from 'react'
import styled, { css } from 'styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'

import IconLibrairy from '../IconLibrairy'

const CodeButtonWrapper = styled.div`
  background: #f5f5f5;
  padding-left: 10px;
  border: solid 1px #ececec;
  border-top: 0;
`

const CodeButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: none;
  border: none;
  line-height: 1.5rem;
  font-weight: bold;
  background: ${({ isActive }) => (isActive ? `#fff` : `transparent`)};
  border: ${({ isActive }) =>
    isActive ? `solid 1px #ececec` : `solid 1px transparent`};
  border-bottom: 0;
  color: #554f52;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  margin: 0;
  border-radius: 4px 4px 0 0;
  margin-top: 6px;
  margin-bottom: -1px;
  padding: 5px 16px;
`
const Preformated = styled.pre`
  max-width: 100%;
  overflow: auto;
  margin: 0 !important;
  white-space: pre-wrap;
  border: none !important;

  ${({ fullScreen }) =>
    !fullScreen &&
    css`
      max-height: ${({ isOpen }) => (isOpen ? `50vh` : `10vh`)};
    `}

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
  position: relative;
  border-left: solid 1px #ececec;

  ${({ fullScreen }) =>
    !fullScreen &&
    css`
      border-right: solid 1px #ececec;
    `}
`

const CopyButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  box-sizing: border-box;
  cursor: pointer;
  background: rgb(42, 39, 52);
  box-shadow: none;
  border: none;
  position: absolute;
  right: 1.1rem;
  top: 6px;
  outline: none;
  z-index: 1000;
`
const Footer = styled.div`
  background: #f5f5f5;
  color: #554f52;
  padding: 5px 15px;
  display: flex;
  justify-content: flex-end;
  border-radius: 0 0 4px 4px;
  border: solid 1px #ececec;
  border-top: 0;
`
const OpenButton = styled.button`
  color: #554f52;
  box-shadow: none;
  border: none;
  background: none;
  padding: none;
  margin: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.75rem;
  outline: none;
`

const LineNumbered = styled.div`
  &:before {
    content: ${({ ln }) => `"${ln}"`};
    display: inline-block;
    width: 3em;
    overflow: hidden;
    font-size: 0.8em;
  }
`

const CodeHilight = ({ code, language, fullScreen, isOpen }) => (
  <Highlight
    {...defaultProps}
    code={code}
    language={language}
    PrismTheme="monikai"
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Preformated
        isOpen={isOpen}
        fullScreen={fullScreen}
        className={className}
        style={style}
      >
        {tokens.map((line, i) => (
          <LineNumbered ln={i} {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </LineNumbered>
        ))}
      </Preformated>
    )}
  </Highlight>
)

const PreviewCodeSample = ({
  preview,
  copyCompatible,
  showCode,
  getLanguage,
  currentCodeSample,
  copied,
  copyCodeToClipBoard,
  fullScreen,
  showMore,
  open,
}) => {
  return (
    <>
      <CodeButtonWrapper>
        {Object.keys(preview).map(codeSampleName => (
          <CodeButton
            isActive={codeSampleName === currentCodeSample}
            key={`${preview}${codeSampleName}`}
            onClick={() => showCode(codeSampleName)}
          >
            {codeSampleName}
          </CodeButton>
        ))}
      </CodeButtonWrapper>

      <Body fullScreen={fullScreen}>
        {copyCompatible && (
          <CopyButton onClick={copyCodeToClipBoard}>
            {copied ? (
              <IconLibrairy name="checked" size="16" fill="#ececec" />
            ) : (
              <IconLibrairy name="copy" size="16" fill="#ececec" />
            )}
          </CopyButton>
        )}
        {currentCodeSample && (
          <CodeHilight
            fullScreen={fullScreen}
            code={preview[currentCodeSample]}
            language={getLanguage(currentCodeSample)}
            isOpen={open}
          />
        )}
      </Body>
      {!fullScreen && (
        <Footer>
          <OpenButton onClick={() => showMore()}>
            {open ? (
              <>
                Show less &nbsp;
                <IconLibrairy name="circleUp" size="12px" fill="#554f52" />
              </>
            ) : (
              <>
                Show more &nbsp;
                <IconLibrairy name="circleDown" size="12px" fill="#554f52" />
              </>
            )}
          </OpenButton>
        </Footer>
      )}
    </>
  )
}
export default PreviewCodeSample
