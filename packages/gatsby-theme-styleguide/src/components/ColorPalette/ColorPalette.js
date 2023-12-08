import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Copy from '../Copy'
import * as styles from './colorpalette.module.css'

const getPalette = (data, preset, id) => {
  if (preset === 'adeo') {
    return data.allColorAdeo.edges.find((item) => item.node.name === id).node
  }

  return data.allColorLm.edges.find((item) => item.node.name === id).node
}
const generateAndoidVariable = (arr) =>
  arr.join('_').toLowerCase().replace('-', '_')
const generateScssVariable = (arr) => `$${arr.join('-')}`

const ColorPalette = (props) => {
  const { id, preset } = props

  const data = useStaticQuery(graphql`
    query {
      allColorAdeo {
        edges {
          node {
            name
            colors
          }
        }
      }
      allColorLm {
        edges {
          node {
            name
            colors
          }
        }
      }
    }
  `)

  const palette = getPalette(data, preset, id)
  const colors = JSON.parse(palette.colors)

  return (
    <div className={styles.container}>
      {Object.keys(colors).map((tone, i) => {
        const color = colors[tone]
        const colorTokenValue = color.value
        const colorTokenName = color.name
        const colorTokenPath = color.path
        const platforms = {
          val: colorTokenValue,
          scss: generateScssVariable(colorTokenPath),
          ios: colorTokenName,
          andr: generateAndoidVariable(colorTokenPath),
          es6: colorTokenName,
        }

        return (
          <div className={styles.wrapper} key={i}>
            <div className={styles.colorBlock}>
              <div
                className={styles.colorBlockPreview}
                style={{ '--background-preview': colorTokenValue }}
              >
                &nbsp;
              </div>
              {Object.keys(platforms).map((item, j) => {
                return (
                  <Copy value={platforms[item]} key={j}>
                    <span>
                      <div className={styles.colorBlockLabel}>
                        <span>{item}</span>
                      </div>
                      <b>{platforms[item]}</b>
                    </span>
                  </Copy>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ColorPalette
