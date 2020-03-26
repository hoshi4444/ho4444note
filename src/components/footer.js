import React from "react"
import styles from "../styles/style.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons' 

const footer = ({}) => {

  library.add(fab) 

  return (
    <footer
        className=
        {styles.footerContents}
        >
          <div
            className={'wrapper'}
            >
            {/* <a href={`https://twitter.com/${social.twitter}`}> */}
            <FontAwesomeIcon icon={['fab', 'twitter']} /> 
            {/* </a> */}
          </div>
    </footer>
  )
}

export default footer