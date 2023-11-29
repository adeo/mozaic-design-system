import * as React from 'react'
import copyToClipBoard from '../../utils/copy-to-clipboard'
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

// export default class TableOfContents extends PureComponent {
const TableOfContents = (props) => {
  const { tableOfContents } = props

  /*


  getAnchorPosition = (e) => {
    const scrollValue = document.getElementById('pageTabs')
      ? document.getElementById('scroller').scrollTop +
        document.getElementById('pageTabs').clientHeight +
        20
      : 20

    const anchors = document.querySelectorAll('.anchor-toc')

    anchors.forEach(function (anchor, index, array) {
      const position = anchor.offsetTop
      const hash = anchor.href.match(/#[\w-_]+$/)[0]

      if (!(index < anchors.length - 1)) return false

      const nextPosition = anchors[index + 1].offsetTop

      if (scrollValue >= position && scrollValue < nextPosition) {
        document.querySelectorAll('.toc__link').forEach((link) => {
          if (link.classList.contains('toc__link--active')) {
            link.classList.remove('toc__link--active')
            link.blur()
          }
        })

        document
          .querySelector('.toc__link[href="' + hash + '"')
          .classList.add('toc__link--active')
      }
    })
  }
  */

  /*
  componentDidMount() {
    document
      .getElementById('scroller')
      .addEventListener('scroll', this.getAnchorPosition)

    const pageTabsHeight = this.getPageTabsHeight()
    const tocDiv = document.querySelector('#toc > div')
    if (tocDiv) tocDiv.style.top = pageTabsHeight + 11 + 'px'

    const hash = window.location.href.match(/#[\w-_]+$/)
    if (hash) {
      setTimeout(() => {
        this.scroller({ hash: hash[0] })
      }, 800)
    }

    document.querySelectorAll('.anchor-toc').forEach((element) => {
      element.title = 'Click to copy the link'
      element.addEventListener('click', (e) => {
        e.preventDefault()
        copyToClipBoard(e.currentTarget.href)
      })
    })
  }
  */

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
