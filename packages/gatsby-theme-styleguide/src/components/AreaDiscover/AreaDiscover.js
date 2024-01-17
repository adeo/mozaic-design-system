import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as styles from './areadiscover.module.css'

const Card = ({ img, title, text, link }) => (
  <div
    className={`${styles.cardContainer} ml-flexy__col ml-flexy__col--full ml-flexy__col--1of3@from-xl`}
  >
    <Link className={styles.cardLink} to={link.toLowerCase()}>
      <figure>
        <img src={img} alt="" className={styles.cardLinkImg} />
      </figure>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardText}>{text}</p>
        <span className={styles.cardCta}>Discover</span>
      </div>
    </Link>
  </div>
)

const AreaDiscover = () => {
  const data = useStaticQuery(graphql`
    query {
      allHomeJson {
        nodes {
          discover {
            img
            link
            text
            title
          }
        }
      }
    }
  `).allHomeJson.nodes[0].discover

  return (
    <div className={`AreaDiscover ${styles.container}`}>
      <h2 className={styles.title}>Discover the product</h2>
      <div className={`${styles.wrapper} ml-flexy ml-flexy--gutter`}>
        {data.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              text={card.text}
              img={card.img}
              link={card.link.toLowerCase()}
            />
          )
        })}
      </div>
    </div>
  )
}

export default AreaDiscover
