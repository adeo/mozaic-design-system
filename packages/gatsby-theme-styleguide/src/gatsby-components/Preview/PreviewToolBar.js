import React from 'react'
import styled from 'styled-components'

import SelectViewport from './PreviewToolBarSelect'

const Toolbar = styled.div`
  background: #999;
  color: #f5f5f5;
  padding: 5px 15px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`

const PatternToolBar = ({
  changeViewPort,
  viewport,
  viewPorts,
  toggleFullScreen,
  fullScreen,
  availableWidth,
}) => (
  <Toolbar>
    fullscreen: {fullScreen}
    <button onClick={() => toggleFullScreen()}>
      {fullScreen ? 'back to page' : 'fullscreen'}
    </button>
    {'  '} | viewport:
    <SelectViewport
      viewPorts={viewPorts}
      viewport={viewport}
      changeViewPort={changeViewPort}
    />
    {viewport}
    {viewPorts[viewport] && ` : ${viewPorts[viewport]}`}
    {viewPorts[viewport] &&
      viewPorts[viewport] > availableWidth &&
      ` | scaled down: ${Math.round(
        (availableWidth / viewPorts[viewport]) * 100
      )}%`}
  </Toolbar>
)
export default PatternToolBar
