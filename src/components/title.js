import React from 'react'
import styles from './title.module.scss'
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";


export default (props) => (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data  => ( 
        <> 
          <Helmet>
            <meta charSet="utf-8" />
            <title> {data.site.siteMetadata.title} | {props.text}  </title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          
          <section className={styles.container}>
            <h1 className={styles.title}>{props.text}</h1>
            <div className={styles.subtitle}>{props.subtitle}</div>
          </section>

         </> 
  
      )}
    />
  );
