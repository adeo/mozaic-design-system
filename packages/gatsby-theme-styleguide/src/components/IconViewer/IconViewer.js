import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import IconTile from './IconTile'
import * as styles from './iconviewer.module.css'

const IconViewer = ({ type }) => {
  const data = useStaticQuery(graphql`
    query AllIcons {
      dataJson {
        color {
          cat
          size
          name
          fileName
          iconName
          componentName
        }
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
        '16px': null,
        '24px': null,
        '32px': null,
        '48px': null,
        '64px': null,
      }

    if (categories[icon.cat][icon.name][icon.size] === null)
      categories[icon.cat][icon.name][icon.size] = {
        ...icon,
      }

    return null
  })

  return (
    <div>
      {Object.keys(categories).map((cat) => (
        <div key={cat}>
          <h2 className={styles.subtitle}>{cat}</h2>
          <ul className={styles.list}>
            {Object.keys(categories[cat]).map((name) => (
              <IconTile
                type={type}
                key={`${cat}-${name}`}
                name={name}
                icons={categories[cat][name]}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default IconViewer
