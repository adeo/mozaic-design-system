import * as React from 'react'
import * as styles from './toc.module.css'

function getPageTabsHeight() {
  const pageTabs = document.querySelector('#pageTabs')
  return pageTabs ? pageTabs.offsetHeight + 5 : 0
}

function scroller(hash) {
  hash = hash.replace('#', '')
  hash = decodeURIComponent(hash)
  const clientRects = document
    .querySelector(`[id="${hash}"]`)
    .getBoundingClientRect()

  const pageTabsHeight = getPageTabsHeight()
  const offset = pageTabsHeight || 5
  const scrollingElem = document.getElementById('scroller')
  scrollingElem.scrollTop = clientRects.y + scrollingElem.scrollTop - offset
}

const TocLink = (props) => {
  const { url, title } = props

  function handleClick(e) {
    e.preventDefault()
    const {
      target: { hash },
    } = e

    scroller(hash)
    return false
  }

  return (
    <a className={styles.tocLink} href={url} onClick={handleClick}>
      {title}
    </a>
  )
}

const TocItems = (props) => {
  const { list } = props

  return list.map((element, index) => {
    let { url, title, items } = element

    // parsing the {#id} (optional)
    if (title) {
      title = title.replace(/\{#([\w-]+)\}$/, (_, capture) => {
        url = '#' + capture
        return ''
      })
      title = title.trim()
    }

    return (
      <li className={styles.tocItem} key={url + '_link_' + index}>
        {title && <TocLink url={url} title={title} />}
        {items && <TocList list={items} key={'group_' + index} />}
      </li>
    )
  })
}

const TocList = (props) => {
  return (
    <ul className={styles.tocList}>
      <TocItems {...props} />
    </ul>
  )
}

const TableOfContents = (props) => {
  const { tableOfContents } = props

  if (!tableOfContents.items) {
    return false
  }

  return (
    <aside className={styles.toc} id="toc">
      <div className={styles.tocWrapper}>
        <div className={styles.tocTitle}>On this page</div>
        <TocList list={tableOfContents.items} />
      </div>
    </aside>
  )
}

export default TableOfContents
