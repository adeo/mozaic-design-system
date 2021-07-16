import React from 'react'
import styled, { css } from 'styled-components'

import Code from '../Code'

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

const Body = styled.div`
  flex: 1;
  overflow: auto;
  position: relative;
  border-left: solid 1px #ececec;

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
        {Object.keys(preview).map((codeSampleName) => (
          <CodeButton
            isActive={codeSampleName === currentCodeSample}
            key={`${preview}${codeSampleName}`}
            onClick={() => showCode(codeSampleName)}
          >
            {codeSampleName}
          </CodeButton>
        ))}
      </CodeButtonWrapper>
      <Body fullScreen={fullScreen} isOpen={open}>
        <Code className={currentCodeSample} copy={true} fullScreen={fullScreen}>
          {preview[currentCodeSample]}
        </Code>
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
