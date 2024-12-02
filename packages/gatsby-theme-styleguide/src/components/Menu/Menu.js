import * as React from 'react'
import MenuList from './MenuList'

const Menu = (props) => {
  const { location } = props

  return (
    <nav className="navContainer">
      <MenuList location={location} />
    </nav>
  )
}

export default Menu
