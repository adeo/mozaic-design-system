import React, { useState } from 'react'
import { Highlight } from 'prism-react-renderer'
import copyToClipboard from '../../utils/copy-to-clipboard'
import IconLibrairy from '../IconLibrairy'
import styled from 'styled-components'

const CopyButton = styled.button`
  width: 1.2rem;
  height: 1.2rem;
  box-sizing: border-box;
  cursor: pointer;
  background: rgb(42, 39, 52);
  box-shadow: none;
  border: none;
  position: absolute;
  right: 1.1rem;
  top: 6px;
  outline: none;
  padding: 0.1rem;

  svg {
    overflow: visible;
  }
`

const LineNumbered = styled.div`
  min-height: 1em;

  &:before {
    display: inline-block;
    width: 3em;
    overflow: hidden;
    font-size: 0.8em;
  }
`

const CodeBlock = styled.code`
  max-width: 100%;
  overflow: auto;
  margin: 0 !important;
  white-space: pre-wrap;
  border: none !important;
`

const Wrapper = styled.div`
  position: relative;
`

const Pre = styled.pre`
  margin-bottom: 0 !important;
  margin-top: 0 !important;
  position: auto !important;
  padding: 1rem 1rem 0.4rem 1rem !important;
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
  <Highlight code={code} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className}>
        <CodeBlock
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
        </CodeBlock>
      </Pre>
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
  isOpen,
  fullScreen,
}) => {
  const [copied, setCopied] = useState(false)
  const language = className
    ? className.split(`language-`).pop().toLowerCase()
    : ''

  const content =
    children.props && children.props.children
      ? children.props.children
      : children

  return (
    <Wrapper>
      {content && (
        <CodeHilight
          fullScreen={fullScreen}
          code={content}
          language={language}
          isOpen={isOpen}
          theme={undefined}
        />
      )}
      <CopyButton
        onClick={() => {
          copyToClipboardClick(content, setCopied)
        }}
      >
        {copied ? (
          <IconLibrairy name="checked" size="0.8rem" fill="#ececec" />
        ) : (
          <IconLibrairy name="copy" size="0.8rem" fill="#ececec" />
        )}
      </CopyButton>
    </Wrapper>
  )
}

export default Code
