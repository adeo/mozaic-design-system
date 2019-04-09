import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Icon = ({ icon }) => (
  <div>
    <img
      src={`/${icon.fullpath}`}
      width={icon.size}
      height={icon.size}
      alt=""
    />
  </div>
)

const IconLine = ({ name, icons }) => (
  <tr>
    <td>
      <small>{name}</small>
    </td>
    {Object.keys(icons).map(size => (
      <td>{icons[size] && <Icon icon={icons[size]} />}</td>
    ))}
  </tr>
)

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

      console.log(JSON.stringify(categories, 0, 2))

      return (
        <div>
          {Object.keys(categories).map(cat => (
            <div key={cat}>
              <h1>{cat}</h1>
              <table>
                <tr>
                  <th>Name</th>
                  <th>16px</th>
                  <th>32px</th>
                  <th>48px</th>
                  <th>64px</th>
                </tr>
                {Object.keys(categories[cat]).map(name => (
                  <IconLine name={name} icons={categories[cat][name]} />
                ))}
              </table>
            </div>
          ))}
        </div>
      )
    }}
  />
)

export default IconViewer
