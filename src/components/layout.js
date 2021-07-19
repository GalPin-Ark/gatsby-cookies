/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect, Suspense } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Preloader from './Preloader'
import LoaderConsent from "./LoaderConsent"
import useCookie from './useCookie';

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [item, setValue] = useCookie('loader');

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.addEventListener('load', () => {
        setDisplayDelay(1000);
      });
    }
    setDisplayDelay(3000);
    return () => {
      window.removeEventListener('load', null);
    };
  });
  const setDisplayDelay = m => {
    setTimeout(function () {
      if (!item) {
        setValue('true')
      }
    }, m);
  };

  return (
    <>


      {item !== 'true' ?
        <Preloader /> : <>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

          <main style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}>{children}</main>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </>
      }

    </>


  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
