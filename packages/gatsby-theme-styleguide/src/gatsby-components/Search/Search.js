import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ResulWrapper = styled.div`
  position: absolute;
  right: 0;
  max-width: 100vw;
  width: 440px;
  background: #fff;
  font-size: 1rem;
  text-transform: none;
  box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  overflow: hidden;
`

const SearchWrapper = styled.div`
  position: fixed;
  right: 1.875rem;
  top: 0.75rem;
  z-index: 99;
`

const ItemSearch = styled.div`
  border-bottom: solid 1px #f5f5f5;
  font-size: 1rem !important;
  text-align: left;

  a {
    display: block;
    padding: 1rem;
    color: #555;
  }

  a:hover,
  a:focus {
    color: #000;
    background-color: #f5f5f5;
  }
`

const Title = styled.div``

const Url = styled.div`
  color: lightblue;
  font-weight: 600;
  font-size: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
`
const Description = styled.div`
  font-weight: 400;
  font-size: 0.8rem;
`

const Input = styled.input`
  font-family: 'LeroyMerlin', sans-serif;
  font-weight: 400;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  outline: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  margin: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
  border: none;
  font-size: 0.875rem;
  line-height: 1.5714286;
  padding: calc(0.3125rem - 0.125em - 1px) 0.5rem calc(0.3125rem + 0.125em - 1px);
  display: block;
  width: 100%;
  position: relative;
  border: 1px solid #6f676c;
  color: #222020;
  background-color: #ffffff;
  border-radius: 4px;
}

&::placeholder {
  font-size: 0.875rem;
  line-height: 1.5714286;
}

&:focus {
  border-color: #25a8d0;
}
`

const ErrMessage = styled.div`
  padding: 1rem;
`

// Search component
class Search extends Component {
  state = {
    query: '',
    results: [],
  }

  render() {
    const ResultList = () => {
      if (this.state.results.length > 0) {
        return this.state.results.map((page, i) => (
          <ItemSearch key={i}>
            <Link to={page.url} className="link">
              <Url>{page.url}</Url>
              <Title>{page.title}</Title>
              <Description>{page.description}</Description>
            </Link>
          </ItemSearch>
        ))
      } else if (this.state.query.length > 2) {
        return (
          <ItemSearch>
            <ErrMessage>No results for {this.state.query}</ErrMessage>
          </ItemSearch>
        )
      } else if (
        this.state.results.length === 0 &&
        this.state.query.length > 0
      ) {
        return (
          <ItemSearch>
            <ErrMessage>
              Please insert at least 3 characters{this.state.query}
            </ErrMessage>
          </ItemSearch>
        )
      } else {
        return ''
      }
    }

    return (
      <SearchWrapper className={this.props.classNames}>
        <Input
          type="text"
          autoFocus
          onChange={this.search}
          placeholder={'Search'}
        />
        <ResulWrapper>
          <ResultList />
        </ResulWrapper>
      </SearchWrapper>
    )
  }

  getSearchResults(query) {
    var index = window.__FLEXSEARCH__.en.index
    var store = window.__FLEXSEARCH__.en.store
    if (!query || !index) {
      return []
    } else {
      var results = []

      // search the indexed fields
      Object.keys(index).forEach(idx => {
        results.push(...index[idx].values.search(query))
      })

      // find the unique ids of the nodes
      results = Array.from(new Set(results))
      // return the corresponding nodes in the store
      // filter code, design and specs pages
      var nodes = store
        .filter(node => (results.includes(node.id) ? node : null))
        .filter(
          page =>
            page.node.title !== 'code' &&
            page.node.title !== 'Code' &&
            page.node.title !== 'Design' &&
            page.node.title !== 'design' &&
            page.node.title !== 'specs' &&
            page.node.title !== 'Specs'
        )
        .map(node => node.node)

      return nodes
    }
  }

  search = event => {
    const query = event.target.value
    if (this.state.query.length > 2) {
      const results = this.getSearchResults(query)
      this.setState({ results: results, query: query })
    } else {
      this.setState({ results: [], query: query })
    }
  }
}

export default Search
