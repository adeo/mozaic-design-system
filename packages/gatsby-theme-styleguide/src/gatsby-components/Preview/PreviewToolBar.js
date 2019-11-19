import React from 'react'
import styled, { css } from 'styled-components'
import IconLibrairy from '../IconLibrairy'

import SelectViewport from './PreviewToolBarSelect'

const Toolbar = styled.div`
  background: #f5f5f5;
  color: #554f52;
  border: solid 1px #ececec;
  border-radius: 4px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 34px;
  position: relative;
  overflow: visible;

  ${({ fullScreen }) =>
    fullScreen &&
    css`
      border: 0;
      border-bottom: solid 1px #ececec;
      border-radius: 0;
    `}
`
const GridButton = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  background: none;
  box-shadow: none;
  border: none;
  outline: none;
`
const ScreenButton = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  background: none;
  box-shadow: none;
  border: none;
  outline: none;
`

const Item = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding: 0.5rem;
  border-right: solid 1px #ececec;
`

const SinglePreview = styled.a`
  color: #666;
  font-size: 11px;
  margin-right: 10px;
`

const PatternToolBar = ({
  changeViewPort,
  viewport,
  viewPorts,
  toggleFullScreen,
  fullScreen,
  availableWidth,
  showGrid,
  grid,
  iframeSrc,
}) => (
  <Toolbar fullScreen={fullScreen}>
    <div>
      <Item>
        <GridButton onClick={showGrid}>
          <IconLibrairy
            size="12"
            name="grid"
            fill={grid ? 'lightblue' : '#554f52'}
          />
        </GridButton>
      </Item>
      <Item>
        <IconLibrairy
          name="display"
          size="12"
          fill="#554f52"
          style={{ marginRight: '8px' }}
        />
        <SelectViewport
          viewPorts={viewPorts}
          viewport={viewport}
          changeViewPort={changeViewPort}
        />
      </Item>
    </div>

    <Item>
      <SinglePreview href={iframeSrc} target="_blank" rel="noopener noreferrer">
        <IconLibrairy name="external-link" size="12" fill="#554f52" />
      </SinglePreview>
      <ScreenButton onClick={() => toggleFullScreen()}>
        {fullScreen ? (
          <IconLibrairy name="reducescreen" size="12" fill="#554f52" />
        ) : (
          <IconLibrairy name="fullscreen" size="12" fill="#554f52" />
        )}
      </ScreenButton>
    </Item>
  </Toolbar>
)
export default PatternToolBar
