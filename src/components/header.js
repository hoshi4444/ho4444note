import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "../styles/style.module.css"

const Header = ({ siteTitle }) => (
  <header
    className={styles.headerBase}
  >
    <div
      className={'wrapper'}
    >
      <h1>
        <Link to="/"
        className={styles.headerTitle}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
