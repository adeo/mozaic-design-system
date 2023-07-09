import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './areavalues.module.css'

const Block = ({ index, title, text }) => (
  <div
    className={`${styles.blockContainer} ml-flexy__col ml-flexy__col--full ml-flexy__col--1of3@from-l`}
  >
    <h3 className={styles.blockTitle}>
      <span className={styles.blockIndex}>{index}</span> {title}
    </h3>
    <p className={styles.blockText}>{text}</p>
  </div>
)

const AreaValues = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allHomeJson {
        nodes {
          ourvalues {
            text
            title
          }
        }
      }
    }
  `).allHomeJson.nodes[0].ourvalues

  return (
    <div className={`AreaValues ${styles.container}`}>
      <h2 className={styles.title}>Our values</h2>
      <div className="ml-flexy ml-flexy--gutter">
        {data.map((block, index) => {
          return (
            <Block
              key={index}
              index={`#${index + 1}`}
              title={block.title}
              text={block.text}
            />
          )
        })}
      </div>
    </div>
  )
}

export default AreaValues
