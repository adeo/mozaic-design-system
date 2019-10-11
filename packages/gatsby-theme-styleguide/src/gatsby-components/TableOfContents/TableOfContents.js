import React, { PureComponent } from 'react'

import './tableofcontents.scss'

export default class TableOfContents extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      copyCompatible: false,
    }
  }
  isClipBoardAPIAvailable = () => {
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: 'clipboard-write' }).then(result => {
        if (result.state === 'granted' || result.state === 'prompt') {
          this.setState({ copyCompatible: true })
        }
      })
    }
  }

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
    const scrollingElem = document.querySelectorAll('main').item(1)
    scrollingElem.scrollTop = clientRects.y + scrollingElem.scrollTop - offset
  }

  onClick = e => {
    e.preventDefault()
    const {
      target: { hash },
    } = e
    this.scroller({ hash })
    return false
  }

  copyToClipBoard = val => {
    if (this.state.copyCompatible) {
      navigator.clipboard.writeText(val)
    }
  }

  componentDidMount() {
    this.isClipBoardAPIAvailable()
    const pageTabsHeight = this.getPageTabsHeight()
    const tocDiv = document.querySelector('#toc > div')
    if (tocDiv) tocDiv.style.top = pageTabsHeight + 'px'

    const hash = window.location.href.match(/#[\w-_]+$/)
    if (hash) {
      setTimeout(() => {
        this.scroller({ hash: hash[0] })
      }, 800)
    }

    document.querySelectorAll('.anchor-toc').forEach(elem => {
      elem.title = 'Click to copy the link'
      elem.addEventListener('click', e => {
        e.preventDefault()
        this.copyToClipBoard(e.currentTarget.href)
      })
    })
  }

  renderList = list =>
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
          <a className="toc__list-link" onClick={this.onClick} href={url}>
            {title}
          </a>
        )
      }
      return (
        <li className="toc__list-item" key={url + '_link_' + index}>
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
          <h2 className="toc__title">TABLE OF CONTENTS</h2>
          <ul className="toc__list">
            {this.renderList(tableOfContents.items)}
          </ul>
        </div>
      </aside>
    )
  }
}
