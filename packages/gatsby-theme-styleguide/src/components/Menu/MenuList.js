import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { parseAllMdx } from '../../utils/tools'
import { ControlLess16, ControlMore16 } from '../icons'
import * as styles from './menu.module.css'

// MENU ITEMS
const MenuItems = ({ items, isOpen }) => {
  const handleClick = (e) => {
    const currentItem = e.currentTarget.closest('li[data-open]')
    const isOpen = currentItem.dataset.open === 'false' ? false : true

    currentItem.dataset.open = `${!isOpen}`
  }

  const onLinkClicked = (e, hasChildren) => {
    if (hasChildren) e.preventDefault()
  }

  return (
    <ul className={styles.menuList}>
      {items.map((item, index) => {
        return (
          <li
            className={styles.menuItem}
            data-level={item.level}
            data-open={false}
            key={index}
          >
            <div
              className={styles.menuItemWrapper}
              onClick={handleClick}
              onKeyDown={handleClick}
              role="menuitem"
              tabIndex="-1"
            >
              <Link
                to={item.slug}
                className={styles.menuLink}
                data-level={item.level}
                onClick={(event) =>
                  onLinkClicked(event, item.content.length > 0)
                }
              >
                {item.title}
              </Link>
              {item.content.length > 0 && (
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
              )}
            </div>
            {item.content.length > 0 && (
              <div className={styles.subMenu}>
                <MenuItems items={item.content} isOpen={true} />
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

// MENU LIST
const MenuList = ({ location }) => {
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

  const mapData = parseAllMdx(data.allMdx.edges)

  return <MenuItems items={mapData} />
}

export default MenuList
