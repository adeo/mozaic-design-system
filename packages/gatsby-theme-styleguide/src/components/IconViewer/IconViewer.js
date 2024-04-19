import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import IconTile from './IconTile'
import * as styles from './iconviewer.module.css'

const IconViewer = ({ type }) => {
  const [filter, setFilter] = useState('')
  const data = useStaticQuery(graphql`
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
  `)

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
              {Object.keys(categories[cat]).filter(
                (f) => f.includes(filter) || filter === '',
              ).length > 0 && <h2 className={styles.subtitle}>{cat}</h2>}
              <ul className={styles.list}>
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
              </ul>
            </div>
          )
        })}
    </div>
  )
}

export default IconViewer
