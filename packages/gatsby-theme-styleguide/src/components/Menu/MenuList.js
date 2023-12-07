import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { parseAllMdx } from '../../utils/tools'
import { ControlLess16, ControlMore16 } from '../icons'
import * as styles from './menu.module.css'

// MENU ITEMS
const MenuItems = (props) => {
  const { items } = props

  const handleClick = (e) => {
    const currentItem = e.currentTarget.closest('li[data-open]')
    const openState = currentItem.dataset.open === 'false' ? false : true

    currentItem.dataset.open = `${!openState}`
  }

  return (
    <ul className={styles.menuList}>
      {items.map((item, index) => {
        const hasChildren = item.content.length > 0
        const isOpen = item.isOpen

        return (
          <li
            className={styles.menuItem}
            data-level={item.level}
            data-open={`${isOpen}`}
            key={index}
          >
            <div
              className={styles.menuItemWrapper}
              onClick={handleClick}
              onKeyDown={handleClick}
              role="menuitem"
              tabIndex="-1"
            >
              {hasChildren ? (
                <>
                  <div className={styles.menuLink} data-level={item.level}>
                    {item.title}
                  </div>
                  <button
                    type="button"
                    className={styles.menuShowHide}
                    aria-label="Show/Hide submenu"
                  >
                    <ControlMore16
                      className={styles.menuIconOpen}
                      fill="#554f52"
                    />
                    <ControlLess16
                      className={styles.menuIconClose}
                      fill="#554f52"
                    />
                  </button>
                </>
              ) : (
                <Link
                  to={item.slug}
                  className={styles.menuLink}
                  data-level={item.level}
                  activeStyle={{ fontWeight: 'bold' }}
                  partiallyActive={true}
                >
                  {item.title}
                </Link>
              )}
            </div>
            {hasChildren && (
              <div className={styles.subMenu}>
                <MenuItems items={item.content} />
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

// MENU LIST
const MenuList = (props) => {
  const { location } = props
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: { slug: ASC } }) {
        edges {
          node {
            fields {
              fileName {
                extension
                name
                relativePath
              }
              slug
            }
            frontmatter {
              description
              order
              title
            }
            id
          }
        }
        totalCount
      }
    }
  `)

  const mapData = parseAllMdx(data.allMdx.edges, location)


  return <MenuItems items={mapData} />
}

export default MenuList
