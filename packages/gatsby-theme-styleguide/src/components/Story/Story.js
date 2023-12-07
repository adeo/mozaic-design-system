import React from 'react'
import './story.css'

function Story({ id, width = 800, height = 260, canvas = true }) {
  const embedRatio = (height / width) * 100
  const chromaticUrl = 'https://main--651ae46c2a6f4410809759ce.chromatic.com/'
  const argsStory = `?path=/story/${id}&full=1&shortcuts=false&singleStory=true`
  const argsCanvas = `iframe.html?id=${id}&viewMode=story`
  const argsUrl = !canvas ? argsStory : argsCanvas
  const iframeUrl = chromaticUrl + argsUrl

  return (
    <>
      <div
        className="embed-responsive"
        style={{
          '--container-ratio': `${embedRatio}%`,
        }}
      >
        <iframe
          className="embed-responsive-item"
          height={height}
          loading="lazy"
          src={iframeUrl}
          width={width}
        ></iframe>
      </div>
    </>
  )
}

export default Story
