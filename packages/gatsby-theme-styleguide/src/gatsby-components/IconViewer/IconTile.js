import React, { Component } from 'react'
import styled from 'styled-components'
import Copy from '../Copy'
import * as icons from '@mozaic-ds/icons/react'

const IconDetail = styled.li`
  flex: 0 1 30.8%;
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

export const SizeItemBtn = styled.button`
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
  padding: 0 3px;
  margin: 3px;
  line-height: 1.25;
  display: block;
  word-break: break-all;
  position: relative;
`

export default class IconTile extends Component {
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
  createComponentName = (str) =>
    str.replace(/_/g, '-').replace('.svg', '').toLowerCase()

  buildIconData(name, icons) {
    let dataIcon = {
      name: { name },
      currentSize: '48px',
      sizes: {
        '20': {
          url: null,
          component: null,
          fileName: null,
          fullName: null,
          iconName: null,
        },
        '24': {
          url: null,
          component: null,
          fileName: null,
          fullName: null,
          iconName: null,
        },
        '32': {
          url: null,
          component: null,
          fileName: null,
          fullName: null,
          iconName: null,
        },
        '48': {
          url: null,
          component: null,
          fileName: null,
          fullName: null,
          iconName: null,
        },
        '64': {
          url: null,
          component: null,
          fileName: null,
          fullName: null,
          iconName: null,
        },
      },
    }

    Object.keys(dataIcon.sizes).forEach((size) => {
      console.log(name)
      console.log(icons)
      console.log(size)
      if (!icons[size]) {
        return false
      } else {
        dataIcon.sizes[size].component = icons[size].componentName || null
        dataIcon.sizes[size].fileName = icons[size].fileName
        dataIcon.sizes[size].iconName = icons[size].iconName
      }

      if (!icons[dataIcon.currentSize]) {
        dataIcon.currentSize = Object.keys(icons).find((size) => {
          return icons[size] != null
        })
      }

      return true
    })
    
    return dataIcon
  }

  render() {
    const Icon = icons[this.state.allIcon[this.state.currentSize].component]
    console.log(Icon)
    return (
      <IconDetail>
        <IconName>{this.props.name}</IconName>
        <IconWrapper>
          <Icon fill="#454545" size={this.state.currentSize} />
        </IconWrapper>
        <SizesList>
          {Object.keys(this.dataIcon.sizes).map((size) =>
            this.state.allIcon[size].fileName ? (
              <SizeItemAvail
                key={`${this.props.name}-${size}`}
                isActive={this.state.currentSize === size}
              >
                <SizeItemBtn
                  type="button"
                  onClick={(e) => this.changeIconSize(size, e)}
                >
                  {size}
                </SizeItemBtn>
              </SizeItemAvail>
            ) : (
              <SizeItem key={`${this.props.name}-${size}`}>{size}</SizeItem>
            )
          )}
        </SizesList>
        {this.state.allIcon[this.state.currentSize].iconName && (
          <Copy
            value={this.state.allIcon[this.state.currentSize].iconName}
            children={
              <TechnicalName
                keyName="Name : "
                value={this.state.allIcon[this.state.currentSize].iconName}
              />
            }
          />
        )}
        {this.state.allIcon[this.state.currentSize].component && (
          <Copy
            value={this.state.allIcon[this.state.currentSize].component}
            children={
              <TechnicalName
                keyName="React/vue : "
                value={this.state.allIcon[this.state.currentSize].component}
              />
            }
          />
        )}
        {this.state.allIcon[this.state.currentSize].fileName && (
          <Copy
            value={this.createComponentName(
              this.state.allIcon[this.state.currentSize].fileName
            )}
            children={
              <TechnicalName
                keyName="Web Component : "
                value={this.createComponentName(
                  this.state.allIcon[this.state.currentSize].fileName
                )}
              />
            }
          />
        )}
        <Copy
          value={this.state.allIcon[this.state.currentSize].fileName}
          children={
            <TechnicalName
              keyName="Svg file : "
              value={this.state.allIcon[this.state.currentSize].fileName}
            />
          }
        />
      </IconDetail>
    )
  }
}

const TechnicalName = ({ keyName, value }) => (
  <IconSizeName>
    {keyName}
    <br />
    {value}
  </IconSizeName>
)
