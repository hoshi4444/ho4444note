import React from "react"
import styles from "../styles/style.module.css"
import PropTypes from "prop-types"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  LineShareButton,
  LineIcon,
  PinterestShareButton,
  PinterestIcon,
} from 'react-share';


const footer = ({ siteTitle, siteUrl }) => (
    <footer
    className=
    {styles.footerContents}
    >
      <div
      className={'wrapper'}
      >
        <div
        className=
        {styles.footerShare}
        >
          <div>
            share!!
          </div>
          <TwitterShareButton title={siteTitle} url={siteUrl}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <LineShareButton url={siteUrl}>
            <LineIcon size={32} round />
          </LineShareButton>

          <FacebookShareButton url={siteUrl}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <PinterestShareButton url={siteUrl}>
            <PinterestIcon size={32} round />
          </PinterestShareButton>

          <LinkedinShareButton url={siteUrl}>
            <LinkedinIcon title={siteTitle} size={32} round />
          </LinkedinShareButton>
        </div>
      </div>
    </footer>
)

footer.propTypes = {
  siteTitle: PropTypes.string,
}

footer.defaultProps = {
  siteTitle: ``,
}


export default footer