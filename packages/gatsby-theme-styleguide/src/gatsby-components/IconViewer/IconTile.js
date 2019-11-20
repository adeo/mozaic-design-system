import styled from 'styled-components'
import React from 'react'

import Copy from '../Copy'
import * as icons from '../IconsComponents'

import './icontile.scss'

const IconDetail = styled.li`
  flex: 0 1 22.8%;
  list-style: none;
  border: 1px solid #eee;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 0.5rem;
`

const IconWrapper = styled.div`
  text-align: center;
  height: 104px;
  line-height: 3.75;
  display: flex;

  img,
  svg {
    margin: auto;
  }
`

const SizesList = styled.ul`
  display: flex;
  margin: 0 !important;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`
const SizeItem = styled.li`
  flex: 0 1 20%;
  list-style: none;
  text-align: center;
  font-size: 0.65rem;
  line-height: 1.62rem;

  background: #f2f2f2;
  color: darkgrey;

  &:not(:first-child) {
    border-left: 1px solid #eee;
  }
`

const SizeItemAvail = styled(SizeItem)`
  background: ${({ isActive }) => (isActive ? `#78be20` : `none`)};
  color: ${({ isActive }) => (isActive ? `white !important` : `inherit`)};
`

const SizeItemBtn = styled.button`
  box-shadow: none;
  margin: 0;
  padding: 0;
  border: none;
  font-size: 0.65rem;
  line-height: 1;
  background: none;
  cursor: pointer;
  color: inherit;
  padding: 0.5rem 0.25rem;
`

const IconName = styled.p`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  font-size: 0.75rem;
  margin: 0;
  font-weight: 600;
  word-break: break-all;
  height: 40px;
`

const IconSizeName = styled.p`
  padding: 0 11px;
  display: block;
  word-break: break-all;
  position: relative;
`

class IconTile extends React.Component {
  constructor(props) {
    super(props)

    this.dataIcon = this.buildIconData(props.name, props.icons)

    this.state = {
      currentSize: this.dataIcon.currentSize,
      allIcon: this.dataIcon.sizes,
    }
  }

  changeIconSize(size) {
    this.setState({ currentSize: size })
  }

  buildIconData(name, icons) {
    let dataIcon = {
      name: { name },
      currentSize: '48px',
      sizes: {
        '16px': {
          url: null,
          component: null,
          fullName: null,
        },
        '24px': {
          url: null,
          component: null,
          fullName: null,
        },
        '32px': {
          url: null,
          component: null,
          fullName: null,
        },
        '48px': {
          url: null,
          component: null,
          fullName: null,
        },
        '64px': {
          url: null,
          component: null,
          fullName: null,
        },
      },
    }

    Object.keys(dataIcon.sizes).forEach(size => {
      if (!icons[size]) {
        return false
      } else {
        dataIcon.sizes[size].fullName = icons[size].fullpath
          .replace('/icons/', '')
          .replace('.svg', '')

        dataIcon.sizes[size].component = icons[size].componentName
      }

      if (!icons[dataIcon.currentSize]) {
        dataIcon.currentSize = Object.keys(icons).find(size => {
          return icons[size] != null
        })
      }

      return true
    })

    return dataIcon
  }

  render() {
    const Icon = icons[this.state.allIcon[this.state.currentSize].component]

    return (
      <IconDetail>
        <IconName>{this.props.name}</IconName>
        <IconWrapper>
          <Icon
            fill="#454545"
            className={`iconSize_${this.state.currentSize}`}
          />
        </IconWrapper>
        <SizesList>
          {Object.keys(this.dataIcon.sizes).map(size =>
            this.state.allIcon[size].fullName ? (
              <SizeItemAvail
                key={`${this.props.name}-${size}`}
                isActive={this.state.currentSize === size}
              >
                <SizeItemBtn
                  type="button"
                  onClick={e => this.changeIconSize(size, e)}
                >
                  {size}
                </SizeItemBtn>
              </SizeItemAvail>
            ) : (
              <SizeItem key={`${this.props.name}-${size}`}>{size}</SizeItem>
            )
          )}
        </SizesList>
        <Copy
          value={this.state.allIcon[this.state.currentSize].fullName}
          children={
            <TechnicalName
              value={this.state.allIcon[this.state.currentSize].fullName}
            />
          }
        />
      </IconDetail>
    )
  }
}

const TechnicalName = ({ value }) => {
  return <IconSizeName>{value}</IconSizeName>
}

export default IconTile
