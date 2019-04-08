import styled from 'styled-components'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const IconsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
const IconDetail = styled.li`
  flex: 0 1 22.8%;
  list-style: none;
  border: 1px solid #eee;
  box-sizing: border-box;
  border-radius: 4px;
  margin: .5rem;
`
const IconWrapper = styled.div`
  text-align: center;
  height: 104px;
  line-height: 3.75;
  display: flex;
  img { margin: auto}
`
const SizesList = styled.ul`
  display: flex;
  margin: 0 !important;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee
`
const SizeItem = styled.li`
  flex: 0 1 20%;
  list-style: none;
  text-align: center;
  font-size: .65rem;
  line-height: 1;
  padding: .5rem .25rem;
  background: #f2f2f2;
  color: darkgrey;
  &:not(:first-child) {
    border-left:1px solid #eee
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
  font-size: .65rem;
  line-height: 1;
  background: none;
  cursor: pointer;
  color: inherit
`
const IconName = styled.p`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  font-size: .75rem;
  margin: 0;
  font-weight: 600;
  word-break: break-all;
  height: 40px;
`
const IconSizeName = styled.p`
  margin-top: 1.5rem;
  padding: 0 1rem;
  display: block;
  font-size: .75rem;
  word-break: break-all;
  position: relative;
`

const Copied = styled.div`
  position: absolute;
  left: 0;
  top: -1rem;
  color: #f5f5f5;
  background: #999;
  border-radius: 3px;
  padding: 3px;
  line-height: 1;
  font-size: 9px;
  margin-left: 10px;
`

const buildIconData = (name, icons) => {

  let dataIcon = {
    name : {name},
    currentSize : '48px',
    sizes : {
      '16px' : false,
      '24px' : false,
      '32px' : false,
      '48px' : false,
      '64px' : false,
    }
  }

  Object.keys(dataIcon.sizes).map((size) => {
    if(!icons[size]) {
      return false;
    }else {
      dataIcon.sizes[size] = icons[size].fullpath.replace('icons\\', '').replace('.svg', '');
    }
    
    if(!icons[dataIcon.currentSize]) {
      dataIcon.currentSize = Object.keys(icons).find(size => { return icons[size] != null })
    }
    
  });

  return dataIcon;
}

class IconLine extends React.Component {
  constructor (props) {
    super(props);

    this.dataIcon = buildIconData(props.name, props.icons);

    this.state = {
      currentSize: this.dataIcon.currentSize,
      allIcon: this.dataIcon.sizes
    };

  }
  changeIconSize(size) {
    this.setState({currentSize: size});
  }
  render() {
    return (
      <IconDetail>
        <IconName>{this.props.name}</IconName>
        <IconWrapper><Icon icon={this.state.allIcon[this.state.currentSize]} size={this.state.currentSize} /></IconWrapper>
        <SizesList>
          {Object.keys(this.dataIcon.sizes).map((size) => 
            this.state.allIcon[size] ? (
              <SizeItemAvail isActive={this.state.currentSize === size}>
                <SizeItemBtn type="button" onClick={(e)=> this.changeIconSize(size, e)}>{size}</SizeItemBtn>
              </SizeItemAvail>
            ) : (
              <SizeItem>{size}</SizeItem>
            )
          )}
        </SizesList>
        <TechnicalName value={this.state.allIcon[this.state.currentSize]}/>
      </IconDetail>
    )
  }
}

class TechnicalName extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      copyCompatible: false,
      copied: false,
    }
  }

  componentDidMount() {
    this.isClipBoardAPIAvailable()
  }

  isClipBoardAPIAvailable = () => {
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: 'clipboard-write' }).then(result => {
        if (result.state === 'granted' || result.state === 'prompt') {
          this.setState({ copyCompatible: true })
        }
      })
    }
  }

  copyToClipBoard = () => {
    if (this.state.copyCompatible) {
      navigator.clipboard.writeText(this.props.value).then(
        () => {
          this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1000)
          })
        },
        () => {
          console.error('error while copying to clipboard')
        }
      )
    }
  }
  render() {
    const { value } = this.props
    const { copied } = this.state

    return (
      <IconSizeName onClick={this.copyToClipBoard}>
        <b>{value}</b>
        {copied && <Copied>copied</Copied>}
      </IconSizeName>
    )
  }
}

const Icon = ({ icon, size }) => {
  return <img src={`/icons/${icon}.svg`} width={size} height={size} alt=""/>
}

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

      console.log(JSON.stringify(categories, 0, 2))

      return (
        <div>
          {Object.keys(categories).map(cat => (
            <div key={cat}>
              <h1>{cat}</h1>
                <IconsList>
                {Object.keys(categories[cat]).map(name => (
                  <IconLine name={name} icons={categories[cat][name]} />
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
