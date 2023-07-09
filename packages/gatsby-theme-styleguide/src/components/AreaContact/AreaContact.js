import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './areacontact.module.css'

const htmlContent = (el) => {
  return {
    __html: el,
  }
}

const Card = ({ icon, title, text, link, linkLabel }) => (
  <div
    className={`${styles.cardContainer} ml-flexy__col ml-flexy__col--full ml-flexy__col--1of3@from-xl`}
  >
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>
        <span className={styles.cardIcon}>
          <img src={icon} alt="" />
        </span>
        <span className="sr-only">{title}</span>
      </h3>
      <p
        className={styles.cardText}
        dangerouslySetInnerHTML={htmlContent(text)}
      ></p>
      <a
        className={styles.cardLink}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkLabel}
      </a>
    </div>
  </div>
)

const AreaContact = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allHomeJson {
        nodes {
          contactus {
            icon
            link
            linkLabel
            text
            title
          }
        }
      }
    }
  `).allHomeJson.nodes[0].contactus

  return (
    <div className={`AreaContact ${styles.container}`}>
      <div className={styles.wrapper}>
        <div className={`${styles.wrap} ml-flexy ml-flexy--gutter`}>
          <div className="ml-flexy__col ml-flexy__col--full ml-flexy__col--1of3@from-xl">
            <h2 className={styles.title}>Need to contact us?</h2>
            <p className={styles.hat}>
              You can speak with Mozaic Design System team on different
              channels. Choose the channel that suits you the best and we’ll be
              happy to give you and your team the support need.
            </p>
          </div>

          {data.map((card, index) => {
            return (
              <Card
                key={index}
                title={card.title}
                text={card.text}
                icon={card.icon}
                link={card.link}
                linkLabel={card.linkLabel}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AreaContact
