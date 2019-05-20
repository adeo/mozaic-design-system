import styled from 'styled-components'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import IconTile from './IconTile'

const IconsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const IconViewer = () => (
  <StaticQuery
    query={graphql`
      query {
        allIconsJson {
          edges {
            node {
              name
              fullpath
              size
              cat
            }
          }
        }
      }
    `}
    render={data => {
      const icons = data.allIconsJson.edges
      const categories = {}

      icons.map(icon => {
        if (!categories[icon.node.cat]) categories[icon.node.cat] = {}

        if (!categories[icon.node.cat][icon.node.name])
          categories[icon.node.cat][icon.node.name] = {
            '16px': null,
            '24px': null,
            '32px': null,
            '48px': null,
            '64px': null,
          }

        if (categories[icon.node.cat][icon.node.name][icon.node.size] === null)
          categories[icon.node.cat][icon.node.name][icon.node.size] = {
            ...icon.node,
          }

        return null
      })

      return (
        <div>
          {Object.keys(categories).map(cat => (
            <div key={cat}>
              <h1>{cat}</h1>
              <IconsList>
                {Object.keys(categories[cat]).map(name => (
                  <IconTile
                    key={`${cat}-${name}`}
                    name={name}
                    icons={categories[cat][name]}
                  />
                ))}
              </IconsList>
            </div>
          ))}
        </div>
      )
    }}
  />
)

export default IconViewer
