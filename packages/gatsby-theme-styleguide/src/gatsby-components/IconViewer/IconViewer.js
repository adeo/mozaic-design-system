import styled from 'styled-components'
import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './styles.scss'

import IconTile from './IconTile'

const IconsList = styled.ul`
  padding: 0;
  margin: 0 !important;
  display: flex;
  flex-wrap: wrap;
`

const IconViewer = ({ type }) => {
  const [filter, setFilter] = useState('')
  return (
    <StaticQuery
      query={graphql`
        query AllIcons {
          dataJson {
            monochrom {
              cat
              size
              name
              fileName
              iconName
              componentName
            }
          }
        }
      `}
      render={(data) => {
        const icons = data.dataJson[type]
        const categories = {}

        icons.forEach((icon) => {
          if (!categories[icon.cat]) categories[icon.cat] = {}
          if (!categories[icon.cat][icon.name])
            categories[icon.cat][icon.name] = {
              20: null,
              24: null,
              32: null,
              48: null,
              64: null,
            }

          if (categories[icon.cat][icon.name][icon.size] === null)
            categories[icon.cat][icon.name][icon.size] = {
              ...icon,
            }

          return null
        })

        return (
          <div>
            <input
              id="filter"
              type="text"
              value={filter}
              className="mc-text-input"
              placeholder="Search icons"
              onChange={(event) => setFilter(event.target.value)}
            />
            {Object.keys(categories)
              .filter((cat) => {
                return cat.length > 0
              })
              .map((cat) => {
                return (
                  <div key={cat}>
                    <h2>{cat}</h2>
                    <IconsList>
                      {Object.keys(categories[cat])
                        .filter((f) => f.includes(filter) || filter === '')
                        .map((name) => (
                          <IconTile
                            type={type}
                            key={`${cat}-${name}`}
                            name={name}
                            icons={categories[cat][name]}
                          />
                        ))}
                    </IconsList>
                  </div>
                )
              })}
          </div>
        )
      }}
    />
  )
}

export default IconViewer
