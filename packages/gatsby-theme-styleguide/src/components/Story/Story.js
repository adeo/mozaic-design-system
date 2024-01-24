import * as React from 'react'
import * as styles from './story.module.css'

function Story({ id, width = 800, height = 260, canvas = true }) {
  const embedRatio = (height / width) * 100
  const chromaticUrl = 'https://legacy--651ae46c2a6f4410809759ce.chromatic.com/'
  const argsStory = `?path=/story/${id}&full=1&shortcuts=false&singleStory=true`
  const argsCanvas = `iframe.html?id=${id}&viewMode=story`
  const argsUrl = !canvas ? argsStory : argsCanvas
  const iframeUrl = chromaticUrl + argsUrl

  return (
    <>
      <div
        className={styles.embedResponsive}
        style={{
          '--container-ratio': `${embedRatio}%`,
        }}
      >
        <iframe
          className={styles.embedResponsiveItem}
          height={height}
          loading="lazy"
          src={iframeUrl}
          width={width}
          title="Story"
        ></iframe>
      </div>
    </>
  )
}

export default Story
