import React, { useState } from 'react'
import Copy from '../Copy'
import * as styles from './iconviewer.module.css'

const buildIconData = (name, icons) => {
  let dataIcon = {
    name: { name },
    currentSize: '48px',
    sizes: {
      '16px': {
        url: null,
        component: null,
        fileName: null,
        fullName: null,
        iconName: null,
      },
      '24px': {
        url: null,
        component: null,
        fileName: null,
        fullName: null,
        iconName: null,
      },
      '32px': {
        url: null,
        component: null,
        fileName: null,
        fullName: null,
        iconName: null,
      },
      '48px': {
        url: null,
        component: null,
        fileName: null,
        fullName: null,
        iconName: null,
      },
      '64px': {
        url: null,
        component: null,
        fileName: null,
        fullName: null,
        iconName: null,
      },
    },
  }

  Object.keys(dataIcon.sizes).forEach((size) => {
    if (!icons[size]) {
      return false
    } else {
      dataIcon.sizes[size].component = icons[size].componentName || null
      dataIcon.sizes[size].fileName = icons[size].fileName
      dataIcon.sizes[size].iconName = icons[size].iconName
    }

    if (!icons[dataIcon.currentSize]) {
      dataIcon.currentSize = Object.keys(icons).find((size) => {
        return icons[size] != null
      })
    }

    return true
  })

  return dataIcon
}

const createWebComponentName = (str) =>
  str.replace(/_/g, '-').replace('.svg', '').toLowerCase()

const TechnicalName = ({ keyName, value }) => (
  <p className={styles.technicalName}>
    {keyName}
    <br />
    {value}
  </p>
)

const IconTile = (props) => {
  const dataIcon = buildIconData(props.name, props.icons)
  const [currentSize, setCurrentSize] = useState(dataIcon.currentSize)
  const [allIcon, setAllIcon] = useState(dataIcon.sizes)

  function changeIconSize(size) {
    setCurrentSize(size)
  }

  return (
    <li className={styles.detail}>
      <p className={styles.iconName}>{props.name}</p>
      <div className={styles.iconWrapper}>
        {props.type === 'monochrom' ? (
          <img
            src={`/icons/monochrom/${allIcon[currentSize].fileName}`}
            alt={allIcon[currentSize].fileName}
            height={currentSize}
            width={currentSize}
            loading="lazy"
          />
        ) : (
          <img
            src={`/icons/color/${allIcon[currentSize].fileName}`}
            alt={allIcon[currentSize].fileName}
            height={currentSize}
            width={currentSize}
            loading="lazy"
          />
        )}
      </div>
      <ul className={styles.sizeList}>
        {Object.keys(dataIcon.sizes).map((size) => (
          <li
            key={`${props.name}-${size}`}
            className={`
              ${styles.sizeListItem} 
              ${currentSize === size ? styles.isActive : ''}
              ${!allIcon[size].fileName ? styles.isDisabled : ''}
            `}
          >
            <button
              type="button"
              className={styles.sizeButton}
              onClick={(e) => changeIconSize(size, e)}
              disabled={allIcon[size].fileName ? false : true}
            >
              {size}
            </button>
          </li>
        ))}
      </ul>
      {allIcon[currentSize].iconName && (
        <Copy
          value={allIcon[currentSize].iconName}
          children={
            <TechnicalName
              keyName="Name: "
              value={allIcon[currentSize].iconName}
            />
          }
        />
      )}
      {allIcon[currentSize].component && (
        <Copy
          value={allIcon[currentSize].component}
          children={
            <TechnicalName
              keyName="React/Svelte/Vue:"
              value={allIcon[currentSize].component}
            />
          }
        />
      )}
      {allIcon[currentSize].fileName && (
        <Copy
          value={createWebComponentName(allIcon[currentSize].fileName)}
          children={
            <TechnicalName
              keyName="Web Component: "
              value={createWebComponentName(allIcon[currentSize].fileName)}
            />
          }
        />
      )}
      <Copy
        value={allIcon[currentSize].fileName}
        children={
          <TechnicalName
            keyName="Svg file : "
            value={allIcon[currentSize].fileName}
          />
        }
      />
    </li>
  )
}

export default IconTile
