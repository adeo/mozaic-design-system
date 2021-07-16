import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const SearchWrapper = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`

const Input = styled.input`
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #ffffff;
  border: 1px solid #6f676c;
  color: #6f676c;
  display: block;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.437rem 0.625rem;
  position: relative;
  width: 100%;
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

const ResultWrapper = styled.div`
  background: #fff;
  border-radius: 0.375rem;
  box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.3);
  font-size: 1rem;
  left: 0;
  max-width: 100vw;
  overflow: hidden;
  position: absolute;
  right: 0;
  text-transform: none;
  z-index: 100;
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
          onChange={this.search}
          placeholder={`I'm looking for...`}
        />
        <ResultWrapper>
          <ResultList />
        </ResultWrapper>
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
      Object.keys(index).forEach((idx) => {
        results.push(...index[idx].values.search(query))
      })

      // find the unique ids of the nodes
      results = Array.from(new Set(results))
      // return the corresponding nodes in the store
      // filter code, design and specs pages
      var nodes = store
        .filter((node) => (results.includes(node.id) ? node : null))
        .filter(
          (page) =>
            page.node.title !== 'code' &&
            page.node.title !== 'Code' &&
            page.node.title !== 'Design' &&
            page.node.title !== 'design' &&
            page.node.title !== 'specs' &&
            page.node.title !== 'Specs'
        )
        .map((node) => node.node)

      return nodes
    }
  }

  search = (event) => {
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
