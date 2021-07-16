import React, { PureComponent } from 'react'
import copyToClipBoard from '../../utils/copy-to-clipboard'
import './tableofcontents.scss'

export default class TableOfContents extends PureComponent {
  getPageTabsHeight = () => {
    const pageTabs = document.querySelector('#page_tabs_menu')
    return pageTabs ? pageTabs.offsetHeight + 5 : 0
  }

  scroller = ({ hash }) => {
    hash = hash.replace('#', '')
    hash = decodeURIComponent(hash)
    const clientRects = document
      .querySelector(`[id="${hash}"]`)
      .getBoundingClientRect()
    const pageTabsHeight = this.getPageTabsHeight()
    const offset = pageTabsHeight || 5
    const scrollingElem = document.getElementById('scroller')
    scrollingElem.scrollTop = clientRects.y + scrollingElem.scrollTop - offset
  }

  onClick = (e) => {
    e.preventDefault()
    const {
      target: { hash },
    } = e
    this.scroller({ hash })
    return false
  }

  getAnchorPosition = (e) => {
    const scrollValue = document.getElementById('page_tabs_menu')
      ? document.getElementById('scroller').scrollTop +
        document.getElementById('page_tabs_menu').clientHeight +
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

    document.querySelectorAll('.anchor-toc').forEach((elem) => {
      elem.title = 'Click to copy the link'
      elem.addEventListener('click', (e) => {
        e.preventDefault()
        copyToClipBoard(e.currentTarget.href)
      })
    })
  }

  renderList = (list) =>
    list.map((elem, index) => {
      let { url, title, items } = elem
      if (items) {
        items = (
          <ul className="toc__list" key={'group_' + index}>
            {this.renderList(items)}
          </ul>
        )
      }

      // parsing the {#id} (optional)
      let anchor = false
      if (title) {
        title = title.replace(/\{#([\w-]+)\}$/, (_, capture) => {
          url = '#' + capture
          return ''
        })
        title = title.trim()
        anchor = (
          <a className="toc__link" onClick={this.onClick} href={url}>
            {title}
          </a>
        )
      }
      return (
        <li className="toc__item" key={url + '_link_' + index}>
          {anchor}
          {items}
        </li>
      )
    })

  render() {
    const { tableOfContents = {} } = this.props

    if (!tableOfContents.items) {
      return false
    }

    return (
      <aside className="toc" id="toc">
        <div className="toc__wrapper">
          <h2 className="toc__title">On this page</h2>
          <ul className="toc__list">
            {this.renderList(tableOfContents.items)}
          </ul>
        </div>
      </aside>
    )
  }
}
