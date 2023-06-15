import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'

import { MagicUnit } from '@mozaic-ds/tokens/build/js/tokens.js'

const lineColor = `rgba(0, 100, 100, 0.1)`
const subLineColor = `rgba(0, 100, 100, 0.03)`

const FrameContainer = styled.div`
  position: relative;
  padding: ${MagicUnit}rem 0;
  box-shadow: inset 0 0 0 1px #ececec;
  background-color: #fff;

  ${({ grid }) =>
    grid &&
    css`
      background-image: linear-gradient(
          90deg,
          ${lineColor} 1px,
          transparent 1px
        ),
        linear-gradient(0deg, ${lineColor} 1px, transparent 1px),
        linear-gradient(90deg, ${subLineColor} 1px, transparent 1px),
        linear-gradient(0deg, ${subLineColor} 1px, transparent 1px),
        linear-gradient(90deg, ${subLineColor} 1px, transparent 1px),
        linear-gradient(0deg, ${subLineColor} 1px, transparent 1px);

      background-size: ${MagicUnit}rem ${MagicUnit}rem,
        ${MagicUnit}rem ${MagicUnit}rem, ${MagicUnit / 2}rem ${MagicUnit / 2}rem,
        ${MagicUnit / 2}rem ${MagicUnit / 2}rem,
        ${MagicUnit / 4}rem ${MagicUnit / 4}rem,
        ${MagicUnit / 4}rem ${MagicUnit / 4}rem;
    `};

  ${({ viewport, viewPorts, availableWidth, fullScreen }) => css`
    width: ${viewPorts[viewport]}px;
    min-width: ${viewPorts[viewport]}px;

    transform: scale(
      ${availableWidth > viewPorts[viewport]
        ? 1
        : availableWidth / viewPorts[viewport]}
    );

    ${availableWidth > viewPorts[viewport] &&
    !fullScreen &&
    css`
      margin: 0 auto;
    `}

    transform-origin: ${fullScreen ? 'center' : 'left top'};
  `};
`

const FrameWrapper = styled.div`
  background: #f5f5f5;
  border-bottom: solid 1px #ececec;
  position: relative;
  overflow: hidden;

  ${({ viewport, viewPorts, availableWidth, iframeHeight }) =>
    availableWidth < viewPorts[viewport] &&
    css`
      height: ${(availableWidth / viewPorts[viewport]) *
      (iframeHeight + MagicUnit * 2 * 16)}px;
    `};
`

const Frame = styled.iframe`
  width: 100%;
  margin: 0;
  padding: 0;
  min-height: 90px;
`

const ToggleOptions = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
`
const ViewportInfos = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background: #ececec;
  display: inline-block;
  font-size: 11px;
  letter-spacing: 0.08em;
  color: #666;
  line-height: 1;
  padding: 6px 8px;
`

const PreviewFrame = ({
  viewport,
  viewPorts,
  availableWidth,
  fullScreen,
  grid,
  iframeSrc,
  nude,
  toggleOptions,
}) => {
  const [iframeHeight, setIframeHeight] = useState(0)
  const frame = useRef(null)

  const resizeFrame = () => {
    setIframeHeight(
      frame.current &&
        frame.current.contentDocument &&
        frame.current.contentDocument.body
        ? frame.current.contentDocument.body.scrollHeight
        : '90px'
    )
  }

  useEffect(() => {
    resizeFrame()
  })

  return fullScreen ? (
    <>
      <FrameContainer
        viewport={viewport}
        viewPorts={viewPorts}
        availableWidth={availableWidth}
        fullScreen={fullScreen}
        grid={grid}
      >
        <Frame
          frameBorder="0"
          height={iframeHeight}
          src={iframeSrc}
          ref={frame}
          onLoad={resizeFrame}
          scrolling="no"
        />
      </FrameContainer>
      {!nude && (
        <ViewportInfos>
          Viewport: {viewPorts[viewport] || availableWidth}px{' '}
          {viewPorts[viewport] > availableWidth &&
            `• Zoom: ${
              Math.ceil((availableWidth / viewPorts[viewport]) * 1000) / 10
            }%`}
        </ViewportInfos>
      )}
    </>
  ) : (
    <FrameWrapper
      viewport={viewport}
      viewPorts={viewPorts}
      availableWidth={availableWidth}
      iframeHeight={iframeHeight}
    >
      <FrameContainer
        viewport={viewport}
        viewPorts={viewPorts}
        availableWidth={availableWidth}
        fullScreen={fullScreen}
        grid={grid}
      >
        <Frame
          frameBorder="0"
          height={iframeHeight}
          src={iframeSrc}
          ref={frame}
          onLoad={resizeFrame}
          scrolling="no"
        />
      </FrameContainer>
      {!fullScreen && (
        <ToggleOptions onClick={toggleOptions}>
          {nude ? 'display options' : 'hide options'}
        </ToggleOptions>
      )}
      {!nude && (
        <ViewportInfos>
          Viewport: {viewPorts[viewport] || availableWidth}px{' '}
          {viewPorts[viewport] > availableWidth &&
            `• Zoom: ${
              Math.ceil((availableWidth / viewPorts[viewport]) * 1000) / 10
            }%`}
        </ViewportInfos>
      )}
    </FrameWrapper>
  )
}

export default PreviewFrame
