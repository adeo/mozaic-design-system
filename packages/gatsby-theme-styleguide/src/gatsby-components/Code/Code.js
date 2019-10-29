import React, { useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import copyToClipboard from '../../utils/copy-to-clipboard'
import IconLibrairy from '../IconLibrairy'
import normalize from './normalize'
import styled, { css } from 'styled-components'

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

const LineNumbered = styled.div`
  &:before {
    display: inline-block;
    width: 3em;
    overflow: hidden;
    font-size: 0.8em;
  }
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
`

const copyToClipboardClick = (str, toogleCopy) => {
  copyToClipboard(str)
    .then(() => {
      toogleCopy(true)
      setTimeout(() => toogleCopy(false), 3000)
    })
    .catch(() => false)
}

const CodeHilight = ({ code, language, fullScreen, isOpen }) => (
  <Highlight
    {...defaultProps}
    code={code}
    language={language}
    theme={undefined}
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

/*
 * MDX passes the code block as JSX
 * we un-wind it a bit to get the string content
 * but keep it extensible so it can be used with just children (string) and className
 */
const Code = ({
  children,
  className = children.props ? children.props.className : ``,
  copy = true,
  isOpen,
  fullScreen,
}) => {
  const [copied, setCopied] = useState(false)
  const language = className ? className.split(`language-`).pop() : ''
  const [content] = normalize(
    children.props && children.props.children
      ? children.props.children
      : children,
    className
  )
  return (
    <Body fullScreen={fullScreen}>
      <CopyButton
        onClick={() => {
          copyToClipboardClick(content, setCopied)
        }}
      >
        {copied ? (
          <IconLibrairy name="checked" size="16" fill="#ececec" />
        ) : (
          <IconLibrairy name="copy" size="16" fill="#ececec" />
        )}
      </CopyButton>
      {content && (
        <CodeHilight
          fullScreen={fullScreen}
          code={content}
          language={language}
          isOpen={isOpen}
          theme={undefined}
        />
      )}
    </Body>
  )
}

export default Code
