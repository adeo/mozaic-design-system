import React, { useState } from 'react'
import { Link } from 'gatsby'
import slugify from '@sindresorhus/slugify'
import * as styles from './search.module.css'

function getSearchResults(query) {
  const index = window.__FLEXSEARCH__.en.index
  const store = window.__FLEXSEARCH__.en.store

  if (!query || !index) {
    return []
  } else {
    let results = []

    // search the indexed fields
    Object.keys(index).forEach((idx) => {
      results.push(...index[idx].values.search(query))
    })

    // find the unique ids of the nodes
    results = Array.from(new Set(results))

    // return the corresponding nodes in the store
    // filter code, design and specs pages
    const nodes = store
      .filter((node) => (results.includes(node.id) ? node : null))
      .filter(
        (page) =>
          page.node.title !== 'code' &&
          page.node.title !== 'Code' &&
          page.node.title !== 'Design' &&
          page.node.title !== 'design' &&
          page.node.title !== 'specs' &&
          page.node.title !== 'Specs',
      )
      .map((node) => node.node)

    return nodes
  }
}

const ResultItem = (props) => {
  const { children } = props
  return <div className={styles.resultItem}>{children}</div>
}

// Search List
const ResultList = ({ results, query }) => {
  if (results.length > 0) {
    return results.map((page, i) => {
      const url = slugify(page.url, { preserveCharacters: ['/'] })
      const { title, description } = page

      return (
        <ResultItem key={i}>
          <Link to={url} className="link">
            <span className={styles.resultUrl}>{url}</span>
            <span className={styles.resultTitle}>{title}</span>
            <span className={styles.resultDescription}>{description}</span>
          </Link>
        </ResultItem>
      )
    })
  } else if (query.length > 2) {
    return (
      <ResultItem>
        <span className={styles.resultError}>No results for {query}</span>
      </ResultItem>
    )
  } else if (results.length === 0 && query.length > 0) {
    return (
      <ResultItem>
        <span className={styles.resultError}>
          Please insert at least 3 characters {query}
        </span>
      </ResultItem>
    )
  } else {
    return ''
  }
}

// Search component
function Search() {
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  function handleChange(event) {
    const query = event.target.value

    if (query.length > 2) {
      const results = getSearchResults(query)
      setSearchResults(results)
      setSearchQuery(query)
    } else {
      setSearchResults([])
      setSearchQuery('')
    }
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={handleChange}
        placeholder={`I'm looking for...`}
        className={styles.input}
      />
      <div className={styles.resultWrapper}>
        <ResultList results={searchResults} query={searchQuery} />
      </div>
    </div>
  )
}

export default Search
